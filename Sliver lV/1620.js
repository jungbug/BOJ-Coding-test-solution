const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = +input[0];
const m = +input[1];
const arr = input.slice(2, n+2);
const pokemonMap = new Map(arr.map((v, i) => [v, i+1]));
const question = input.slice(n+2);
const answer = [];
question.forEach(v => {
    if (Number.isNaN(+v)) answer.push(pokemonMap.get(v));
    else answer.push(arr[+v-1]);
});
console.log(answer.join("\n"));

//////////////////////////////

const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const count = input[0].split(" ").map(x => +x)
const [a,b] = count
let result = []
let example = []
let answer = ""
for(let i = 1;i<=a;i++){
    example.push(input[i])
}
for(let i = a; i<(a+b); i++){
    result.push(input[i+1])
}
for(let i = 0;i<result.length;i++){
   if(isNaN(Number(result[i]))){
       for(let j = 0; j<example.length+1;j++){
           if(result[i] === example[j-1]){
               answer += j + "\n"
           }
       }
}else{
    answer += example[result[i]] + "\n" 
   }
}
console.log(answer)