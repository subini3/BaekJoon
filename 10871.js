//input.txt  /dev/stdin
const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n'); 

// let N = input[0].split(' ').map(x => Number(x));
// let Arr = input[1].split(' ').map(x => Number(x));


//     let answer = [];
//     for(let i of Arr){
//         if(i < N[1]){
//             answer.push(i);
//         }
//     }

// console.log(answer.join(' '));

let X = Number(input[0].split(' ')[1]);
let Arr = input[1].split(' ').map(x => Number(x));
const answer = Arr.filter(a => X > a);

console.log(answer.join(' '));