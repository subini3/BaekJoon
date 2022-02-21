const fs = require('fs');

const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(el => el.trim().split(' ').map(el => Number(el)))

const [N, M] = input[0];

let maxv = 0;
let ans = 0;
for (let i = 1; i <= M; i++) {
    const [A,] = input[i];
    ans += Math.max(N - A, 0);
    if (maxv < N - A) maxv = N - A;
}

console.log(ans - maxv)


