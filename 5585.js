//input.txt  /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();

let coin = [500, 100, 50, 10, 5, 1];
let change = 1000 - input;
cnt = 0;

for(let i of coin){
    cnt += Math.floor(change / i);
    change %= i;
}

console.log(cnt)