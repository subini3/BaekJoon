//input.txt  /dev/stdin
const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n'); 

let i = 0;

while(i < input.length ){
    console.log(+input[i].split(' ')[0] + +input[i].split(' ')[1]);
    i++
}
