const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [a, b] = input

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(Math.floor(a/b))
console.log(a%b)