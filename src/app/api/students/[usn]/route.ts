import { NextRequest, NextResponse } from 'next/server';
import { findStudentByUSNOrName } from '@/data/students';

export async function GET(
  request: NextRequest,
  { params }: { params: { usn: string } }
) {
  try {
    const { usn } = params;
    
    if (!usn) {
      return NextResponse.json(
        { error: 'USN parameter is required' },
        { status: 400 }
      );
    }

    // Find student by USN
    const student = await findStudentByUSNOrName(usn, null);
    
    if (!student) {
      return NextResponse.json(
        { error: 'Student not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: student
    });

  } catch (error) {
    console.error('Error fetching student:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}