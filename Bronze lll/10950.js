const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const count = input[0]
for(let i = 1; i<= count;i++){
    let a = input[i].split(" ")
    
    console.log(Number(a[0])+ Number(a[1]))
}