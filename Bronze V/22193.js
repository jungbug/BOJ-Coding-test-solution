const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const A = BigInt(input[1]); 
const B = BigInt(input[2]); 
console.log(String(A*B));