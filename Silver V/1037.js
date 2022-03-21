const input = require('fs').readFileSync('dev/stdin').toString().split('\n')
const numbers = input[1].split(' ').sort((a,b)=>a-b)
const firstnum = Number(numbers[0])
const lastnum = Number(numbers[numbers.length-1])
let result = 0

numbers.length>=2?result =  firstnum*lastnum:result = firstnum*firstnum
console.log(result)