const fs = require('fs');
const [S, T, D] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
console.log(D/(S*2) * T);