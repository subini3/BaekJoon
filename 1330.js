//input.txt  /dev/stdin
let input = require('fs').readFileSync('input.txt').toString().split('\n');

const[a,b] = input;

for(let i = 2; i>=0; i--){
    console.log(a * b[i]);
}
console.log(a*b)