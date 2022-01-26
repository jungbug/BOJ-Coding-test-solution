const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [a,b,c,d] = input

console.log((a*b) + (c*d))