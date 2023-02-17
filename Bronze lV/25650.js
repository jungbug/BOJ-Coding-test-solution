let fs = require("fs")
let input = fs.readFileSync("dev/stdin").toString().split("\n")
let result = 0

let mbti = input[0]

for(let i = 2; i<input.length;i++){
    if(mbti == input[i]){
        result++
    }
}

console.log(result)