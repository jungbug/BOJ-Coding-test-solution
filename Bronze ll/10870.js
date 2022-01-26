const fs = require("fs");
const input = fs.readFileSync("/dev/stdin");
let a = 0
let nums = [0,1]
if(input == 1){
    console.log(1)
}else{
    for(let i = 0; i<input-1; i++){
        a = nums[i] + nums[i+1]
        nums.push(a)
    }
    console.log(a)
}