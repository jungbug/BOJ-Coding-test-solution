const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")

let answer = []

for(let i = 0; i<input.length; i++){
    let fir = +input[i].split(" ")[0]
    let sec = +input[i].split(" ")[1]
    if(fir == 0 && sec == 0){
      break;
    }
    if(fir > sec){
        answer.push("Yes")
    }else{
        answer.push("No")
    }
}
console.log(answer.join("\n"))