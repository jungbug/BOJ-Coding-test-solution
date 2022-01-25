const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [a,b] = input
let result = a-b
if(result > 0){
    console.log(result)
}else{
 console.log(-result)   
}

////////////////////

const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [a,b] = input
console.log(Math.abs(a - b))