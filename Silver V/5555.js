const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const a = input[0]
const num = input[1]
let point = 0
for(let i = 0; i<num; i++){
    let str = input[i+2] + input[i+2]
    if(str.includes(a)){
        point++
    }
}
console.log(point)