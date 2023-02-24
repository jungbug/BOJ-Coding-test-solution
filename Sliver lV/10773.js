class Stack {

  constructor() {
    this.arr = []
  }

  push(data) {
    this.arr.push(data)
  }

  pop() {
    if (this.arr.length === 0) {
      console.log('false')
      return
    }
    return this.arr.pop()
  }

  get size() {
    return this.arr.length
  }

  get top() {
    return this.arr[this.arr.length - 1]
  }
}

const stack = new Stack()

const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n").map(v => +v)
const N = input[0]

for(let i = 1; i<=N; i++){
  if(input[i] == 0){
    stack.pop()
  }else{
    stack.push(+input[i])
  }
}

let result = 0;

for (let i = 0; i < stack.size; i++) {
  result += stack.arr[i];
}

console.log(result)