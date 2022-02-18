//input.txt  /dev/stdin
const fs = require('fs');

let [a, b, c, m] = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number)

let fatigue = 0
let work = 0

for(let i = 1; i <= 24; i++){
    if(fatigue + a <= m){
        work += b
        fatigue += a
    }
    else{
        fatigue -= c
        if(fatigue < 0){
            fatigue = 0
        }
    }
}

console.log(work)

