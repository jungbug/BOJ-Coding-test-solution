const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [N,M] = input

const output = []
let result = ""

function bt(idx){
    if(idx === M){
        result += output.join(" ") + "\n"
        return
    }
    for(let i = 1; i<=N;i++){
            output.push(i)
            bt(idx+1)
            output.pop()
    }
    return result
}

console.log(bt(0))