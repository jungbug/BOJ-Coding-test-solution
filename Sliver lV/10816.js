const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const N = Number(input.shift())
const A = input.shift().split(" ")
const M = Number(input.shift())
const B = input.shift().split(" ")

const map = new Map()

let answer = []
for(let i = 0; i<N; i++){
  if(map.has(A[i])){
    map.set(A[i], map.get(A[i]) + 1)
  }else{
    map.set(A[i], 1)
  }
}

for(let i = 0; i<M; i++){
  if(map.has(B[i])){
    answer.push(map.get(B[i]))
  }else{
    answer.push("0")
  }
}

console.log(answer.join(" "))