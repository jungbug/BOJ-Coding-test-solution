const fs = require("fs")
const input = +fs.readFileSync("dev/stdin")

function solution(N){
    // [0, 0, 0, 0]
    const visited = new Array(N).fill(0)

    let answer = 0

    // 경우의 수 하나를 보는 함수
    function dfs(row){
        if(row === N){
            answer++
        } else{
            // i: column
            for(let i = 0;i<N;i++){
                if(visited[row]) continue
                visited[row] = i // 방문표시
                if(isValid(row)) dfs(row + 1)
                visited[row] = 0
            }
        }
    }

    // 해당 자리에 Queen을 놓을 수 있는지 없는지 체크하는 함수 return value: boolean
    function isValid(x){    // x: row
        // i: column(열)
        for(let i = 0;i<x;i++){
            if(visited[x] === visited[i]) return false
            if(Math.abs(visited[x] - visited[i]) === x - i) return false
        }
        return true
    }

    dfs(0)
    return answer
}

console.log(solution(input))