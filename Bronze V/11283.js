const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim(); 
const answer = input.charCodeAt()-44031; 
console.log(answer);