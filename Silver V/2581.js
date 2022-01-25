const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
let a = Number(input[0])
let b = Number(input[1])
let thtn = []
let sum = 0
for(let i = a; i<=b;i++){
    for(let j = 2; j<=i;j++){
        if(j*j > i){
            thtn.push(i);
            sum += i;
            break;
        }
        if(i % j === 0){
            break;
        }
    }
}
if(thtn.length === 0){
    console.log(-1);
}else{
    console.log(sum);
    console.log(thtn[0]);
}