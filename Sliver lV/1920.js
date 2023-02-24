const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")

let Arr1 = [...input[1].split(" ").map(v => +v)]
let Arr2 = [...input[3].split(" ").map(v => +v)]

const set = new Set(Arr1)

let answer = Arr2.map(v => set.has(v) ? 1 : 0)

console.log(answer.join("\n"))