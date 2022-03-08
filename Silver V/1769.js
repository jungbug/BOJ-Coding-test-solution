const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(str) {
    let answer = 0;

    function recur(str) {
        if(str < 10) return str;
        str = String(str).split('').reduce((acc,cur) => acc+ (+cur),0);
        answer++;
        return recur(str); 
    }

    recur(str);

    return [answer,recur(str) % 3 === 0 ? 'YES' : 'NO']
}

console.log(solution(input).join('\n'));