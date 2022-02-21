const fs = require('fs');
const [xFee, yBaseRate, yUsage, yFee, P] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number); 
const X = xFee * P;
const Y = yUsage < P ? yBaseRate + (yFee * (P - yUsage)) : yBaseRate; 
console.log(Math.min(X, Y));