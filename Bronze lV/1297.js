const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
const len = input[0];
const height = input[1]; 
const width = input[2];
const x = len / (height**2 + width **2)**0.5 
console.log(Math.floor(height *x), Math.floor(width * x));
