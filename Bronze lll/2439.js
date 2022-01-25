const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const count = Number(input[0])
let star = ""

for(let i = 0; i<count;i++){
    for(let j = 0;j<count -i-1;j++){
        star = star + " "
    }
    for(let k = 0; k<=i;k++){
        star = star + "*"
    }
    star = star + "\n"
}
console.log(star)


///////////

const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const count = Number(input[0])
let star = ""

for (i = 0; i< count ; i++){
    let a = "*".repeat(i+1)
    flag = a.padStart(count)
    star = star + flag + "\n" 
   }
console.log(star)