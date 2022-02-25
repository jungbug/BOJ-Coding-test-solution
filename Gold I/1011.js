let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
let x; // 시작 지점
let y; // 도착 지점
let a;
let b;

let answerArray = [];
for(let i = 1; i <= count; i++){
    input[i] = input[i].split(" ");
    x = Number(input[i][0]);
    y = Number(input[i][1]);

    if(Math.sqrt(y-x) % 1 === 0 ){ // y-x가 제곱수라면
        answer = 2 * Math.sqrt(y-x) - 1;

    }else{
        a = Math.pow(Math.ceil(Math.sqrt(y-x)), 2); // y-x 보다 큰 제곱 수 
        b = Math.pow(Math.ceil(Math.sqrt(y-x)) - 1, 2) + 1; // 그보다 한 단계 아래 제곱 수
        if((a+b) / 2 <= y-x){
            answer = 2 * Math.ceil(Math.sqrt(y-x)) - 1;
        }else{
            answer = 2 * Math.ceil(Math.sqrt(y-x)) - 2;
        }
    }
    answerArray.push(answer);
    console.log(answerArray[answerArray.length - 1]);
}