//input.txt  /dev/stdin
const fs = require('fs');

const [H, M] = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number); 

console.log(`${M >= 45 ? H : H > 0 ? H - 1 : H + 23} ${M >= 45 ? M - 45 : M + 15}`);