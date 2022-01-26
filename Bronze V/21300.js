const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number); 
let answer = 0;
const refund = input.map( i => { answer += i*5; return }); 
console.log(answer);