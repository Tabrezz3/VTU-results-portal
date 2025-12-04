import { NextRequest, NextResponse } from 'next/server';
import { getAllStudents, searchStudents, getStudentsBySection } from '@/data/students';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const section = searchParams.get('section');
    const limit = parseInt(searchParams.get('limit') || '50');
    const page = parseInt(searchParams.get('page') || '1');

    let students;

    if (search) {
      // Search functionality
      const searchResult = await searchStudents(search, limit);
      return NextResponse.json({
        success: true,
        data: {
          exactMatch: searchResult.exactMatch,
          results: searchResult.results,
          suggestions: searchResult.suggestions
        }
      });
    } else {
      // Get all students or filter by section
      students = await getAllStudents();
      
      if (section) {
        students = getStudentsBySection(students, section);
      }

      // Pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedStudents = students.slice(startIndex, endIndex);

      return NextResponse.json({
        success: true,
        data: {
          students: paginatedStudents,
          pagination: {
            page,
            limit,
            total: students.length,
            totalPages: Math.ceil(students.length / limit)
          }
        }
      });
    }

  } catch (error) {
    console.error('Error fetching students:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}