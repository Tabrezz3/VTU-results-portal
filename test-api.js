// Quick test script to verify the API is working
const { findStudentByUSNOrName, getAllStudents } = require('./data/students.ts');

async function testAPI() {
  try {
    console.log('Testing local data access...');
    
    // Test 1: Get all students
    const allStudents = await getAllStudents();
    console.log(`✅ Total students loaded: ${allStudents.length}`);
    
    // Test 2: Find specific student by USN
    const testUSN = '3VC24CS096'; // First student in your data
    const student = await findStudentByUSNOrName(testUSN, null);
    
    if (student) {
      console.log(`✅ Found student: ${student.fullName} (${student.usn})`);
      console.log(`   SGPA: ${student.sgpa}, Total Marks: ${student.totalMarks}`);
    } else {
      console.log('❌ Student not found');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

testAPI();