const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const a = BigInt(input[0])
const b = BigInt(input[1])
const c = BigInt(input[2])

console.log(((b-c)/a).toString())