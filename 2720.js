//input.txt  /dev/stdin
const fs = require('fs');

let input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number);

const N = input[0]
const coin = [25, 10, 5, 1]


for(let i = 1; i < N + 1; i++){
    let cent = input[i];
    let change = [];
    for(let j = 0; j < coin.length; j++){
        change.push(Math.floor(cent / coin[j]))
        cent %= coin[j]
    }
    console.log(...change)
}