const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const count = Number(input[0])
let arr = []
let result = ""
for(let i = 1; i<=count; i++){
    let nums = Number(input[i])
    arr.push(nums)
}

for(let i = arr.length - 1;i >0;i--){
        for(let j = 0;j<i;j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j+1], arr[j]]
            }
        }
    }

for(let i = 0; i<arr.length;i++){
    result += arr[i] + "\n"
}
 console.log(result)