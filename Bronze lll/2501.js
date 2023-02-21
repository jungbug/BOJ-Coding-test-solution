const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().split(" ");
const T = input.shift();
let output = [];

for (let i = 0; i <= T; i++) {
  if (T % i === 0) output.push(i)
}

if (output.length >= input[0]) {
  console.log(output[input[0] - 1]);
} else {
  console.log(0);
}