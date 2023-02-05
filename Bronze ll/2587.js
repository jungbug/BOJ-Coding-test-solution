const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = 0;

for (const num of input) {
  sum += num;
}

const ascArr = input.sort((a, b) => a - b);
const medium = Math.floor(ascArr.length / 2);
console.log(sum / input.length, ascArr[medium]);