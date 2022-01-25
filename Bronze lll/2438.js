const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const count = Number(input[0])
let star = ""

for(let i = 0; i<count;i++){
    for(let k = 0; k<=i;k++){
        star = star + "*"
    }
    star = star + "\n"
}
console.log(star)