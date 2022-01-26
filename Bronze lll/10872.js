const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const num = Number(input[0])
let a = 1

for(let i = 1; i<=num;i++){
    a = a * i
}
console.log(a)