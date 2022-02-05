//input.txt  /dev/stdin
let input = require('fs').readFileSync('input.txt').toString().split(' ').map(Number);

const[a,b] = input;

// if(a > b){
//     console.log('>')
// } else if(a === b){
//     console.log('==')
// } else{
//     console.log('<')
// }

console.log(a > b ? '>' : a < b ? '<' : '==')