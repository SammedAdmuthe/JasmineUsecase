const jasmine = require('jasmine');
const fs = require('fs');

const { read_csv } = require('./app'); 



it('should identify a CSV file', () => {
    const csvFilePath = 'text.csv'; // Enter the path to a test CSV file
    const isCSV = csvFilePath.toLowerCase().endsWith('.csv');
    var required_contents = "1, 2, 3\n4, 5";
    var data = read_csv();
    expect(data).toBe(required_contents);
  });