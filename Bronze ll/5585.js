const fs = require("fs")
const input = +fs.readFileSync("dev/stdin")
let example = []
example.push(1000 - input)
example.push(1)
example.push(5)
example.push(10)
example.push(50)
example.push(100)
example.push(500)

let num = example[0]
let result = 0
for(let i = example.length-1; i>=1;i--){
    result += Math.floor(num/example[i])
    num = num % example[i]
}
console.log(result)