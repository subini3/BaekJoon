const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n'); 

const card = input[0].split(' ').map(x => Number(x));
const num = input[1].split(' ').map(x => Number(x));

let max = 0;
for(let i = 0; i<card[0]; i++){
    for(let j = i + 1; j<card[0]; j++){
        for(let k = j + 1; k <card[0]; k++){
            let sum = num[i] + num[k] + num [j];
            if(sum <= card[1] && sum > max){
                max = sum;
            }
        }
    }
}

console.log(max);