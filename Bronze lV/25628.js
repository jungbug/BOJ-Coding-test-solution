const fs = require("fs")
const [A,B] = fs.readFileSync("dev/stdin").toString().split(" ")
console.log(Math.floor(Math.min((A/2),B)))