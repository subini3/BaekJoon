//input.txt  /dev/stdin
const fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();

let start = 'A'
cnt = 0
for(let i of input){
    left = i.charCodeAt() - start.charCodeAt();
    right = start.charCodeAt() - i.charCodeAt();
    if(left < 0){
        left += 26;
    }else if(right < 0){
        right += 26;
    }
    cnt += Math.min(left, right);
    start = i;
}
console.log(cnt)