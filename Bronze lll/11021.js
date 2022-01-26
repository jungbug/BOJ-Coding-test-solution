const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const count = Number(input[0])

for(let i = 1; i<=count; i++){
    let a = Number(input[i].split(" ")[0])
    let b = Number(input[i].split(" ")[1])
    console.log(`Case #${i}: ${a+b}`)
}