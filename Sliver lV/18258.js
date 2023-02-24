class Queue {
  constructor() {
    this.items = [];
  }
  
  // 요소를 Queue에 추가하는 메소드
  enqueue(element) {
    this.items.push(element);
  }
  
  // Queue에서 요소를 제거하고 반환하는 메소드
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }
  
  // Queue의 첫 번째 요소를 반환하는 메소드
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  back() {
    if(this.isEmpty()) {
      return "Queue is empty"
    }
    return this.items[this.items.length - 1]
  }
  
  // Queue가 비어있는지 여부를 반환하는 메소드
  isEmpty() {
    return this.items.length == 0;
  }
  
  // Queue의 크기를 반환하는 메소드
  size() {
    return this.items.length;
  }
  
  // Queue의 모든 요소를 반환하는 메소드
  printQueue() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

let queue = new Queue();

const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const N = +input[0]
let answer = []
for(let i = 1; i<=N; i++){
  let order = input[i].split(" ")[0]
  let inner = input[i].split(" ")[1]
  if(inner === undefined){
    if(order == "front"){
      if(queue.front() == "Queue is empty"){
        answer.push(-1)
      }else{
        answer.push(queue.front())
      }
    }else if(order == "back"){
      if(queue.back() == "Queue is empty"){
        answer.push(-1)
      }else{
        answer.push(queue.back())
      }
    }else if(order == "size"){
      answer.push(queue.size())
    }else if(order == "empty"){
      if(queue.isEmpty()){
        answer.push(1)
      }else{
        answer.push(0)
      }
    }else if(order == "pop"){
      if(queue.size() == 0){
        answer.push(-1)
      }else{
        answer.push(queue.dequeue())
      }
    }
  }else{
    queue.enqueue(inner)
  }
}

console.log(answer.join("\n"))




class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class LinkedList{
  constructor(){ 
      this.head = null;
      this.tail = null;
      this._size = 0; 
  }

  add(value) {
      const newNode = new Node(value);

      if (!this.head) {
          this.head = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
      }

      this.tail = newNode;
      this._size++;

      return newNode;
  }

  getHead() {
    if(queue.head == null){
      return "empty"
    }
      return this.head.value;
  }

  getBack() {
    if(queue.tail == null){
      return "empty"
    }
    return this.tail.value
  }

  removeHead() {
    if(this.head == null){
      return "empty"
    }
    let back = this.head.value
      this.head = this.head.next;
      if(this.head == null){
        this._size--;
        return back
      }else{
        this.head.prev = null;
        this._size--;
        return back
      }
  }

  getSize() {
      return this._size;
  }
}

// const queue = new LinkedList()

// const fs = require("fs")
// const input = fs.readFileSync("dev/stdin").toString().split("\n")
// const N = +input[0]
// let answer = []
// for(let i = 1; i<=N; i++){
//   let order = input[i].split(" ")[0]
//   let inner = input[i].split(" ")[1]
//   if(inner === undefined){
//     if(order == "front"){
//       if(queue.getHead() == "empty"){
//         answer.push(-1)
//       }else{
//         answer.push(queue.getHead())
//       }
//     }else if(order == "back"){
//       if(queue.getBack() == "empty"){
//         answer.push(-1)
//       }else{
//         answer.push(queue.getBack())
//       }
//     }else if(order == "size"){
//       answer.push(queue.getSize())
//     }else if(order == "empty"){
//       if(queue.getSize() == 0){
//         answer.push(1)
//       }else{
//         answer.push(0)
//       }
//     }else if(order == "pop"){
//       if(queue.getSize() == 0){
//         answer.push(-1)
//       }else{
//         answer.push(queue.removeHead())
//       }
//     }
//   }else{
//     queue.add(inner)
//   }
// }

// console.log(answer.join("\n"))
