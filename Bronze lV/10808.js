const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("")
const alp = "abcdefghijklmnopqrstuvwxyz"
const count = new Array(alp.length).fill(0)
input.forEach((v) => {
    count[alp.indexOf(v)]++
})
console.log(count.join(" "))