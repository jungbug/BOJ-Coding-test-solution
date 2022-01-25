const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().split("\n").map(x=> +x)
let max = input[0]
let maxCount = 0
for (let i = 1; i < input.length; i++) {
  if (max < input[i]) {
    max = input[i]
    maxCount = i
  }
}

console.log(max)
console.log(maxCount + 1)