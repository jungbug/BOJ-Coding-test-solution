const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n").map(x => +x)
const [a,b] = input
let i = 0
let nums = []
let sum = 0

while(true){
    i++
    let c = i*i
    if(a<=c && c<=b){
        nums.push(c)
    }
   if(c>b){
       break;
   }
}

nums.forEach((item) => {
  sum = sum + item;
});

let min = Math.min.apply(null,nums);
if(sum === 0){
    console.log(-1)
}else{
    console.log(sum,min)
}
