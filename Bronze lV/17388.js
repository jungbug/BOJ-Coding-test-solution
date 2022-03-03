const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [a,b,c] = input

const min = Math.min(a,b,c)

if(a+b+c >= 100){
    console.log("OK")
}else if(min == a){
    console.log("Soongsil")
}else if(min == b){
    console.log("Korea")
}else{
    console.log("Hanyang")
}
