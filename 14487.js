const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n')

let N = input[0];
let cost = input[1].split(' ').map(el => Number(el));

cnt = 0;
for(let i of cost){
        cnt += i
}

console.log(cnt - (Math.max(...cost)))


