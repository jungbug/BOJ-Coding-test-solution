const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
let nums = []   
for(let i = 0; i<10;i++){
    let a = Number(input[i]) % 42
    nums.push(a)
}
let realNums = [];
nums.forEach((element) => {
    if (!realNums.includes(element)) {
        realNums.push(element);
    }
});
console.log(realNums.length)