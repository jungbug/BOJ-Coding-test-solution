const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")
const a = Number(input[0].split(" ")[0])
const b = Number(input[0].split(" ")[1])
let result = ""
for(let i = 0; i<5;i++){
    let c = a*b
    let nums = Number(input[1].split(" ")[i])
    result += `${nums-c} `
}
console.log(result)