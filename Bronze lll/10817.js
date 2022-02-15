const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
let result = []
for(let i = 0; i<input.length; i++){
    result.push(input[i])
}
result.sort((a,b) => {
    return a - b
})
console.log(result[1])