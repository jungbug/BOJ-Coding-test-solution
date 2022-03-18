var fs = require("fs")

const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');

let caseNum = stdin[0];

//2차원 배열의 형태이며, 행은 현재 state, 
//열의 0번째 요소는 '0'이라는 문자열이 주어진 뒤 상태,
//열의 1번째 요소는 '1'이라는 문자열이 주어진 뒤의 상태이다.
let dfs = [
    [2, 1],
    [3, 8],
    [8, 7],
    [4, 8],
    [4, 5],
    [2, 6],
    [9, 6],
    [2, 1],
    [8, 8],
    [4, 7]
]

function isMatch(str){
    //상태의 초기값
    let curState = 0;
    for(let c of str){
        if(c === "0"){
            curState = dfs[curState][0];
        } else if(c === "1"){
            curState = dfs[curState][1];
        }
    }

    //탐색이 끝난 후, F의 집합에 속할 경우
    if(curState === 5 || curState === 6 || curState === 7) return true;
    return false;
}



for(let i = 1; i <= caseNum; i++){
    if(isMatch(stdin[i])) console.log("YES");
    else console.log("NO");
}