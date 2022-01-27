const fs = require('fs');
const inputData = fs.readFileSync('dev/stdin').toString().split(' ').map(value => +value)
const [a, b]:number[] = inputData;

console.log(a+b)

export{}