const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
const answer = Number(input);
console.log(answer*(answer-1))