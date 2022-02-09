//input.txt  /dev/stdin
const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n'); 

let i = 0;

while(input[i] !== '0 0'){
    let num = input[i].split(' ');
    console.log(+num[0]+ +num[1]);
    i++;
}
