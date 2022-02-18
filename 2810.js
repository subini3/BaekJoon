//input.txt  /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');
let N = input[0];
let seat = input[1];

cnt = 1;
for(let i = 0; i < N; i++){
    if(seat[i] == 'L'){
        cnt += 1
        i ++
    }else{
        cnt += 1
    }
}

console.log(cnt > N ? N : cnt)
