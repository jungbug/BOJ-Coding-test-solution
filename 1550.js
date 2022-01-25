const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ")
let answer = parseInt(input, 16);
console.log(answer)