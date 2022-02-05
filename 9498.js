//input.txt  /dev/stdin
let input = require('fs').readFileSync('input.txt').toString().split(' ').map(Number);


// if(input >= 90){
//     console.log('A')
// } else if(input >= 80){
//     console.log('B')
// } else if(input >= 70){
//     console.log('C')
// } else if(input >= 60){
//     console.log('D')
// } else {
//     console.log('F')
// }

console.log(input >=90 ? 'A' : input >=80 ? 'B' : input >=70 ? 'C' : input >=60 ? 'D' : "F")