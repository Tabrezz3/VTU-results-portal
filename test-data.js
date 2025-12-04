// Simple test to verify data loading
const { STUDENTS_RAW_DATA } = require('./data/students-data.ts');

console.log('Testing data loading...');
console.log('Total students:', STUDENTS_RAW_DATA?.length || 0);

if (STUDENTS_RAW_DATA && STUDENTS_RAW_DATA.length > 0) {
  console.log('First student:', STUDENTS_RAW_DATA[0]);
  console.log('✅ Data loaded successfully');
} else {
  console.log('❌ No data found');
}