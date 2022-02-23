let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString();

let N = Number(input);
let count = 0;
let answer = [];

function Hanoi(num, from, other, to){
    if(num === 0) {
        return;
    }else{
        Hanoi(num - 1 , from, to, other);
        answer.push([from, to]);
        count++;
        Hanoi(num - 1, other, from, to);
    }
}
Hanoi(N, '1','2','3');
console.log(count);
console.log(answer.map((element) => element.join(" ")).join("\n"));