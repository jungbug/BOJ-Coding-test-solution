const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const count = +input[0]
let result = 0

for(let i = 1; i<= count ; i++){
    result += +input[i] - 1
}
console.log(result + 1)