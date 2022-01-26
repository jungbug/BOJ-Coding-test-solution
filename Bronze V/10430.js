const input = require("fs").readFileSync("dev/stdin").toString().split(" ").map(x => +x)
const [a, b, c] = input
console.log(Math.floor((a+b)%c))
console.log(Math.floor(((a%c)+(b%c))%c))
console.log(Math.floor((a*b)%c))
console.log(Math.floor(((a%c)*(b%c))%c))