const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n'); 

[n, ...arr] = input;

let person = arr.map(el => el.split(' ').map(el => Number(el)))

let answer = [];

for(let i = 0; i < n; i++){
    let cnt = 1;
    for(let j = 0; j < n; j++){
        if(i !==j)
        if(person[i][0] < person[j][0] && person[i][1] < person[j][1]){
            cnt++;
        }
    }
    answer.push(cnt)
}

console.log(answer.join(' '))
