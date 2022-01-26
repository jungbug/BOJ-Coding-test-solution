const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const count = Number(input[0])
let a = 0

for(let i = 0; i<=count; i++){
    a = a + i
}
console.log(a)