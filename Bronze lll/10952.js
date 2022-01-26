const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")
for(let i = 0; i < input.length;i++){
let num1 = parseInt(input[i].split(" ")[0])
let num2 = parseInt(input[i].split(" ")[1])
let sum = num1+num2

if(sum === 0){
break;
} else {
console.log(sum)
}
}
