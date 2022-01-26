const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim(); 
const price = Number(input);
const answer1 = price * 0.78;
const answer2 = (price * 0.8) + ((price * 0.20) * 0.78);
console.log(answer1, answer2);