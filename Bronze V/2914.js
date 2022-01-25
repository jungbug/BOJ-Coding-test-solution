const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let answer = input[0] * (input[1]-1) + 1;
console.log(answer)