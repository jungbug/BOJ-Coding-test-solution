const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [a,b,c] = input

let flag = Math.floor((a/b)*(10**c))
flag = flag.toString()
console.log(Number(flag[flag.length-1]))