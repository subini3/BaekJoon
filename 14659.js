//input.txt  /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
let N = input[0];
let mountin = input[1].split(' ').map(el => Number(el));

answer = [];
highest = 0;
cnt = 0;
for(let i of mountin){
    if(i < highest){
        cnt ++
    }else{
        highest = i
        answer.push(cnt);
        cnt = 0;
    }
}
answer.push(cnt)
console.log(Math.max(...answer))
