const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [a, b] = input
let c = 2*b - a
console.log(c)