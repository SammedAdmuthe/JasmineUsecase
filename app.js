
const fs = require('fs');
// const jasmine = require('jasmine');

function read_csv()
{
    var data = fs.readFileSync('text.csv');
    return data.toString();
}

module.exports  = { read_csv };
