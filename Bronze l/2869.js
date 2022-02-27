const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [a,b,c] = input

console.log(Math.ceil((c-b)/(a-b)))