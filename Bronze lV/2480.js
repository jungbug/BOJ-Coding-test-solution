const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ")
let example = []
for(let i = 0; i<3;i++){
    example.push(Number(input[i]))
}
example.sort(function(a, b) {
  return a - b;
});

const a = example[0]
const b = example[1]
const c = example[2]

if(a == b && b == c){
    console.log(10000 + b * 1000)
}else if(a == b || b == c){
    console.log(1000 + b * 100)
}else {
    console.log(c * 100)
}