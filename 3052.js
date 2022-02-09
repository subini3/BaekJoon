// input.txt  /dev/stdin
const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number);

let arr = input.map(a => a%42);
let set = new Set(arr);
let answer = [...set]
console.log(answer.length)