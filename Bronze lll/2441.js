const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const count = Number(input[0])
let star = ""

for (i = count; i>=0 ; i--){
    let a = "*".repeat(i)
    flag = a.padStart(count)
    star = star + flag + "\n" 
   }
console.log(star)