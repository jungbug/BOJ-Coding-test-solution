const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const count = +input[0]
let result = []
for(let i = 1; i <=count; i++){
    let example = []
    for(let j = 0; j<10;j++){
        example.push(input[i].split(" ")[j])
    }
    example.sort(function(a, b) {
        return b-a;
    });
    result.push(example[2])
    example = []
}
console.log(result.join("\n"))