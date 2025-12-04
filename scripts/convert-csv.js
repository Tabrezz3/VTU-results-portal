// scripts/convert-csv.js
const fs = require('fs');

const csvText = fs.readFileSync('combined_vtu_results_cleaned.csv', 'utf8');
const lines = csvText.trim().split('\n');
const headers = lines[0].split(',');

const jsonData = lines.slice(1).map(line => {
  const values = line.split(',');
  const obj = {};
  headers.forEach((header, index) => {
    obj[header.trim()] = values[index] || '';
  });
  return obj;
});

fs.writeFileSync('src/data/students.json', JSON.stringify(jsonData, null, 2));
