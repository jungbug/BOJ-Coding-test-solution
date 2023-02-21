const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString()
let array = []
for(let i = 0; i<input/4; i++){
  array.push("long")
}

console.log(array.join(" ") + " int")