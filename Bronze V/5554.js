const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split( "\n").map(x => +x)
const [a, b, c, d] = input
const sum = a + b + c + d
const min = Math.floor(sum / 60) + "\n"
const sec = sum % 60
console.log(min+sec)