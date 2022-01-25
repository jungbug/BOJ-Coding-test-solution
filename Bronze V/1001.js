const fs = require('fs');
const inputData = fs.readFileSync('dev/stdin').toString().split(' ').map(x => +x);
const [a, b] = inputData;

console.log(a-b)