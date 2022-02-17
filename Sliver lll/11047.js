const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
let num = Number(input[0].split(" ")[1])
let result = 0
for(let i = Number(input[0].split(" ")[0]); i>= 1; i--){
    result += Math.floor(num/input[i])
    num = num % Number(input[i])
}
console.log(result)