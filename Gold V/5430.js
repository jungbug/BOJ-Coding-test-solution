const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const N = input.shift()
let answer = ""

for(let i = 0; i<N; i++){
  let flag = true
  let Reverse = false //false면 그대로 true면 reverse
  let block = input.splice(0,3)
  let order = block[0]
  let array = block[2].slice(1,-1).split(",")
  for(let j = 0; j<order.length; j++){
    if(order[j] == "R"){
      Reverse = !Reverse
    }else if(order[j] == "D"){
      if(block[1] === "0"){
        answer += "error\n"
        flag = !flag
        break
      }
      if(array.length === 0){
        answer += "error\n"
        flag = !flag
        break
      }
      if(Reverse){
        array.pop()
      }else{
        array.shift()
      }
    }
  }
  if(Reverse){
    array.reverse()
  }
  if(flag) answer += `[${array}]\n`
}
console.log(answer.trim())