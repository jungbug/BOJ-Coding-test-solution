const fs = require("fs")
const input = fs.readFileSync("dev/stdin")
const a = (Number(input)+1) * 2
const b = (Number(input)+1) * 3

console.log(`${a} ${b}`)