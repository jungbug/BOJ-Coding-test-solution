const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [a,b] = input
if(b==1 || b==2){
    console.log("NEWBIE!")
}else if(a>=b && b>2){
    console.log("OLDBIE!")
}else{
    console.log("TLE!")
}