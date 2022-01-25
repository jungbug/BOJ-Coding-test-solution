const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const count = Number(input[0])
let star = ""

for(let i = count; i>0;i--){
    for(let k = 1; k<=i;k++){
        star = star + "*"
    }
    star = star + "\n"
}
console.log(star)