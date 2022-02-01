const fs = require('fs');
const input = fs.readFileSync("dev/stdin").toString().split("\n").map(x => +x)
const [a,b] = input

const answer = (a,b) => {
    if(a>2) return "After"
    if(a<2) return "Before"
    
    if(a === 2){
        if(b>18) return "After"
        if(b<18) return "Before"
        if(b === 18) return "Special"
    }
}

console.log(answer(a, b));