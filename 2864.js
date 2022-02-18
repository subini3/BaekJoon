//input.txt  /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
let N = input[0]
let seat = input[1]

console.log(seat)



