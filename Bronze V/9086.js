const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
for(let i = 1; i<=input[0]; i++){
  if(input[i].length == 1){
    console.log(input[i]+input[i])
  }else{
    console.log(input[i][0]+input[i][input[i].length-1])
  }
}