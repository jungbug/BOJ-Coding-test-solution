const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const a = Number(input[0].split(" ")[0])
const b = Number(input[0].split(" ")[1])
let result = ""
let numbers = [];
numbers = input[1].split(' ');

result = '';
for (let i = 0; i < a; i++) {
  if (Number(numbers[i]) < b) {
    result += numbers[i] + ' ';
  }
}
console.log(result)