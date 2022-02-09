//input.txt  /dev/stdin
const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split(' '); 

let num = Number(input);
let i = 0;
while(true){
    let sum = Math.floor(num/10) + num%10;
    num = (num%10)*10 + sum%10;
    i++
    if (num === Number(input)){
        break;
    }
}
console.log(i);