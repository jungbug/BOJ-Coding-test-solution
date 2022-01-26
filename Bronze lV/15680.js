const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim()
if(input == 0){
    console.log("YONSEI")
}else{
    console.log("Leading the Way to the Future")
}