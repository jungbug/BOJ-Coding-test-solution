const fs = require('fs');
const inputs = fs.readFileSync('dev/stdin').toString().split('\n');
let count = Number(inputs[0]);
let answer = [];
for(let i=1; i<=count; i++){
    let x = Number(inputs[i].split(' ')[0]);
    let y = Number(inputs[i].split(' ')[1]);
    let common = gcd(x,y);
    answer.push((x*y) / common);
}

function gcd(a,b){
    let tmp;
    while(b != 0){
        tmp = a % b;
    	a = b;
        b = tmp;
    }
    return a;
}
console.log(answer.join('\n').trim());


/////////////////////////////////


const input1 = [`3
1 45000
6 10
13 17`]
const input = input1[0].split("\n")
const count = Number(input[0])
let j = 1
let result = []
for(let i = 1; i<=count;i++){
    let a = Number(input[i].split(" ")[0])
    let b = Number(input[i].split(" ")[1])
    while(true){
        if(j%a == 0 && j%b == 0){
            result.push(j)
            j = 1
            break;
        }
        j++
    }
}
console.log(result.join("\n"))