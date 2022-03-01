const fs = require('fs');
const [A, B, C] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number); 
const answer = parseInt(Math.max((A*B)/C, (A/B)*C)) 
console.log(answer);