const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [N,M] = input

const output = []
let result = ""
let visited = new Array(N+1).fill(0)

function bt(idx, k){
    if(idx === M){
        result += output.join(" ") + "\n"
        return
    }
    for(let i = k; i<=N;i++){
            visited[i] = 1
            output.push(i)
            bt(idx+1, i)
            output.pop()
            visited[i] = 0
    }
    return result
}

console.log(bt(0, 1))