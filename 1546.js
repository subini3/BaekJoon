//input.txt  /dev/stdin
const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n'); 

let num = input[1].split(' ').map(a => Number(a));
let max = Math.max(...num);
let sum = num.reduce((a,b) => a+b/max * 100, 0)
console.log(sum/+input[0])
