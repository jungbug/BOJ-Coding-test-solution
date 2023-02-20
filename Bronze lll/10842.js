const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ")
let fir = input[0] + input[1]
let sec = input[2] + input[3]
console.log(+fir + +sec)