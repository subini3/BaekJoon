//input.txt  /dev/stdin
const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number); 

let max = Math.max(...input)
 
console.log(max + "\n" + (input.indexOf(max)+1))