const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(el => el.trim().split(' ').map(el => Number(el)))

const [N, M] = input[0]
let cnt = 0;
let arr = [];

for(let i = 1; i <= M; i++){
    const [A, B] = input[i]
    if(A < B){
        arr.push(N-A);
    } else{
        cnt += 1;
    }
}

arr.sort((a, b) => a-b);

let sum = arr.reduce((a,c, i, arr) =>{
    if(i + 1 >= M-cnt-1) arr.splice(i-1);
    return a+c
})

if(cnt >= M-1){
    console.log(0)
}else{
    console.log(sum)
}

