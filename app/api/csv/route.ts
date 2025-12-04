import { NextResponse } from 'next/server';
import { STUDENTS_RAW_DATA } from '@/data/students-data';

export async function GET() {
  try {
    // Convert JSON data to CSV format
    if (STUDENTS_RAW_DATA.length === 0) {
      return NextResponse.json(
        { error: 'No student data available' }, 
        { status: 404 }
      );
    }

    // Get headers from the first object
    const headers = Object.keys(STUDENTS_RAW_DATA[0]);
    
    // Create CSV content
    const csvContent = [
      headers.join(','), // Header row
      ...STUDENTS_RAW_DATA.map(student => 
        headers.map(header => {
          const value = student[header as keyof typeof student] || '';
          // Escape commas and quotes in CSV values
          return typeof value === 'string' && (value.includes(',') || value.includes('"')) 
            ? `"${value.replace(/"/g, '""')}"` 
            : value;
        }).join(',')
      )
    ].join('\n');
    
    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Cache-Control': 'public, max-age=86400' // Cache for 24 hours
      }
    });
  } catch (error) {
    console.error('Error generating CSV:', error);
    return NextResponse.json(
      { error: 'Failed to generate CSV data' }, 
      { status: 500 }
    );
  }
}
