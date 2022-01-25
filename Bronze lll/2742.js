const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")
const a = Number(input[0])

let result = '';
  for(let i = a; i >= 1; i--) {
    result = result + `${i} \n`;
  }
  console.log(result);