// input.txt  /dev/stdin
const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n');
let N = Number(input[0])

for(let i = 1; i <=N; i++){
    let score = input[i].split(' ').map(a => Number(a));
    let num = score.shift();
    let avg = (score.reduce((a,b) => a+b))/num;
    let better = score.filter((c) => avg < c);
    let raito = ((better.length/num) * 100).toFixed(3);
    console.log(raito+'%')
}



