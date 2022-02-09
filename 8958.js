// input.txt  /dev/stdin
const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n');
let test = Number(input[0]);

for(let i = 1; i <= test; i++){
    let cnt = 0;
    let sum = 0;

    for(let x = 0; x<input[i].length; x++){
        if(input[i][x] === 'O'){
            cnt ++;     
        }else{
            cnt =0;
        }
        sum += cnt;
    }
    console.log(sum);
}

