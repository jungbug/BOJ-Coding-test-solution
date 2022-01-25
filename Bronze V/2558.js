const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n").map(x => +x)
const [a, b] = input

console.log(a+b)