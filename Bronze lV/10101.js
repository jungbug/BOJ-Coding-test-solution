const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n").map(x => +x)
const [a,b,c] = input

if(a+b+c == 180){
    if(a==b && b==c){
        console.log("Equilateral")
    }else if(a == b || b ==c || c==a){
        console.log("Isosceles")
    }else{
        console.log("Scalene")
    }
}else{
    console.log("Error")
}