let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let sum = 0;
for (let i = 0; i < 5; i++) {
  if (input[i] < 40) {
    input[i] = 40;
  }
  sum += Number(input[i]);
}

let result = Math.floor(sum / 5);
console.log(result);