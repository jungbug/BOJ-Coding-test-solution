const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [a, b, c] = input
if(c<=b){
     console.log("-1")
 }else{
     console.log(Math.floor((a/(c-b))+1))
 } 

 ///////////////////////////////

const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [A, B, C] = input
let N = A / (C - B);

let answer = Math.floor(N) + 1;

B >= C ? (answer = -1) : answer;

console.log(answer);