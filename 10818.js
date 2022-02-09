//input.txt  /dev/stdin
const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n'); 

// let num = input[1].split(' ').map(Number);

// let max = num[0];
// let min = num[0];

// for(let i of num){
//     if(i > max){
//         max = i;
//     }
//     if(i < min){
//         min = i;
//     }
// };
// console.log(`${min} ${max}`)

let num = input[1].split(' ').sort((a,b) => a - b).map(Number);

console.log(`${num[0]} ${num[num.length-1]}`)