const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim()

console.log('1 2 '.repeat(Math.floor(input/2)) + (input % 2 !== 0 ? "3" : ""))
