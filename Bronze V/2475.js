const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
let result = 0
for(let i = 0; i< input.length;i++){
    let a = input[i]**2
    result += a
}
console.log(result % 10)