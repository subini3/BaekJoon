//input.txt  /dev/stdin
const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n');

// let Multiply =String(input[0]*input[1]*input[2]);

// for(let x = 0; x < 10; x++){
//     let cnt = 0;
// for(let i =0; i<Multiply.length; i++){
//     if(x === Number(Multiply[i])){
//        cnt++;
//     }
//     }
//     console.log(cnt)
// }

let Multiply =String(input[0]*input[1]*input[2]);

for(let i = 0; i < 10; i++){
    console.log(Multiply.split(i + '').length-1)
}