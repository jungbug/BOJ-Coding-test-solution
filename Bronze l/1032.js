const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n")
const count = Number(input[0])
let result = []
let result1 = ""
for(let i = 1; i<=count;i++){
    for(let j = 0; j< input[1].length;j++){
        if(result == ""){
            result = input[1].split("")
        }else{
            if(!(result[j] === input[i][j])){
                result[j] = "?"
            }
        }
    }
}
    
for(let i = 0; i< result.length;i++){
    result1 += result[i]
}
console.log(result1)