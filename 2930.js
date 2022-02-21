const fs = require('fs');

const [R, sang, n, ...e] = require('fs').readFileSync('input.txt').toString().trim().split('\n');

let score = 0;
let maxScore = 0;

for(let i = 0; i < R; i++){
    let r = s = p = 0;
    for(let j of e){
        if(j[i] == 'S'){
        s += 1;
        r += 2;
        }else if(j[i] == 'P'){
            s += 2;
            p += 1;
        }else if(j[i] == 'R'){
            p += 2;
            r += 1;
        }
    }if(sang[i] == 'S'){
        score += s;
    }else if(sang[i] == 'P'){
        score += p;
    }else if(sang[i] == 'R'){
        score += r;
    }
    maxScore += Math.max(r,s,p)
}

console.log(score);
console.log(maxScore);
