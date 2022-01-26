const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number); 
let answer = 0;
input.forEach(i => answer += i);
console.log(answer)