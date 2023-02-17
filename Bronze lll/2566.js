const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n")
let array = []
for (let i = 0; i < 9; i++) {
    array.push(input[i].split(' ').map(Number))
}
let flatArr = array.flat()


let maxVal = flatArr.slice().sort((a, b) => b - a)[0]
console.log(maxVal)

const maxNumIdx = flatArr.indexOf(maxVal)
const h = Math.floor(maxNumIdx / 9) + 1
const y = (maxNumIdx % 9) + 1
console.log(h, y)