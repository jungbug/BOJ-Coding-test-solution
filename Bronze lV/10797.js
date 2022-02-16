const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const day = +input[0]
let result = 0
for(let i = 0; i<input[1].length;i++){
    let a = +input[1].split(" ")[i]
    if(a == day){
        result++
    }
}
console.log(result)