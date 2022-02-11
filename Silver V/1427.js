const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().trim()
let example = []
let result = ""
for(let i = 0;i<input.length;i++){
    example.push(input[i])
}
example.sort(function(a, b) {
    return b-a;
});

for(let i = 0;i<example.length;i++){
    result += example[i]
}
console.log(result)