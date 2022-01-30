const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
let example = []
let result = ""
let i = 0
while(true){
    
    let a = Number(input[i].split(" ")[0])
    let b = Number(input[i].split(" ")[1])
    let c = Number(input[i].split(" ")[2])
    
    example.push(a,b,c)
    example.sort(function(a, b) {
  return a - b;
});
    if(a == 0&& b== 0 && c==0){
        break;
    }
    if((example[0] ** 2) + (example[1] ** 2) == (example[2] ** 2)){
        result += "right"+"\n"
    }else{
        result += "wrong"+"\n"
    }
    example = []
    i++
}
console.log(result)