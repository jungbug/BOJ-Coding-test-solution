const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("/").map(x => +x)
const [a,b,c] = input

if((a+c) < b || b==0){
    console.log("hasu")
}else{
    console.log("gosu")
}