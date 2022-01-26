const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [a,b,c] = input

const x = Math.floor(c/b)
const y = c%b

console.log(`${x} ${y}`)