//input.txt  /dev/stdin
const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().trim();

let button = [300, 60, 10];
let cnt = [];
for (let i = 0; i < button.length; i++){
    cnt.push(Math.floor(input / button[i]));
    input %= button[i];
}

console.log(input !== 0 ? -1 : cnt.join(' '));