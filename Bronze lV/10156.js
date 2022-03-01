const fs = require('fs');
const [K, N, M] = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
const price = K * N; 
console.log(price > M ? price - M : 0);
