const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")

const a1 = +input[0].split(" ")[0]
const a2 = +input[0].split(" ")[1]
const a3 = +input[0].split(" ")[2]
const c1 = +input[1].split(" ")[0]
const c2 = +input[1].split(" ")[1]
const c3 = +input[1].split(" ")[2]
const b1 = c1-a3
const b2 = parseInt(c2/a2)
const b3 = c3 - a1

console.log(`${b1} ${b2} ${b3}`)