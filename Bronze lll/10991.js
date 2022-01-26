const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split(" ")
let print = ""
let n = input[0]
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++)
        print = print + " ";
    for (let j = 0; j < i + 1; j++)
        print = print + "* ";
    print = print + "\n"
}
console.log(print)

