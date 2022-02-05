const fs = require('fs'); 
const [L, A, B, C, D] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);
let aDay = Math.ceil(A/C);
let bDay = Math.ceil(B/D); 
if(aDay >= bDay) console.log(L-aDay)
if(aDay < bDay) console.log(L-bDay)
