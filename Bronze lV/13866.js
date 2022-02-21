const fs = require('fs'); 
const [A, B, C, D] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number); 
const answer = Math.abs((A + D) - (B + C));
console.log(answer);