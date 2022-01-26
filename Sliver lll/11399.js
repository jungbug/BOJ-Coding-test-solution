const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const count = Number(input[0])
let arr = []
let result = 0
for(let i = 0; i<count; i++){
    let nums = Number(input[1].split(" ")[i])
    arr.push(nums)
}

for(let i = arr.length - 1;i >0;i--){
        for(let j = 0;j<i;j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j+1], arr[j]]
            }
        }
    }
let a = 0
for(let i = 0; i<arr.length;i++){
    a = 0
    for(let j = 1; j<=i;j++){
        a += arr[i-j]
    }
    result += arr[i] + a
}
console.log(result)