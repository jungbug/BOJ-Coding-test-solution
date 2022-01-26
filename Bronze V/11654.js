const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const a = input[0]

console.log(a.charCodeAt(0))