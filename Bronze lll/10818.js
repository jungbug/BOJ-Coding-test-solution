const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")
const a = Number(input[0])
const nums = input[1].split(" ").map(x => +x)

let max = nums[0]
let min = nums[0]
for(let i = 0; i<a;i++){
    if(max < nums[i]){
        max = nums[i]
    }
    
    if(min > nums[i]){
        min = nums[i]
    }
}
console.log(`${min} ${max}`)