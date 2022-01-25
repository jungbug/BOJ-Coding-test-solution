const fs = require("fs")
let input = Number(require('fs').readFileSync('/dev/stdin').toString());
let num = input;
let a = 0
let sum
let i = 0
while(true){
    i++
    sum = Math.floor(num / 10) + num % 10
    num = (num % 10) * 10 + sum % 10
    if (input === num) {
        break
    } 
}
console.log(i)