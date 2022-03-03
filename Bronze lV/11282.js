const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim(); 
const answer = String.fromCharCode(Number(input) + 44031)
console.log(answer);