class Deque {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }
  push_front(item) {
    if (this.arr[0]) {
      for (let i = this.arr.length; i > 0; i--) {
        this.arr[i] = this.arr[i - 1];
      }
    }
    this.arr[this.head] = item;
    this.tail++;
  }
  push_back(item) {
    this.arr[this.tail++] = item;
  }
  pop_front() {
    if (this.head >= this.tail) {
      return -1
    } else {
      const result = this.arr[this.head++];
      return result;
    }
  }
  pop_back() {
    if (this.head >= this.tail) {
      return -1
    } else {
      const result = this.arr[--this.tail];
      return result;
    }
  }
  front() {
    if(this.tail == 0){
      return -1
    }
    return this.arr[this.head]
  }
  back() {
    if(this.tail == 0){
      return -1
    }
    return this.arr[this.tail - 1]
  }
}

let deque = new Deque();

const input1 = `22
front
back
pop_front
pop_back
push_front 1
front
pop_back
push_back 2
back
pop_front
push_front 10
push_front 333
front
back
pop_back
pop_back
push_back 20
push_back 1234
front
back
pop_back
pop_back`

const input = input1.split("\n")

const N = input.shift()

let result = []

for (let i = 0; i < N; i++) {
  let order = input[i].split(" ")[0]
  let num = input[i].split(" ")[1]
  if (order.length < 6) {
      switch(order) {
        case 'front':  // if (x === 'value1')
          result.push(deque.front())
          break
        case 'back':  // if (x === 'value2')
          result.push(deque.back())
          break
        case 'size':
          result.push(deque.tail - deque.head)
          break
        case 'empty':
          if(deque.tail == deque.head){
            result.push(1)
          }else{
            result.push(0)
          }
          break
      }
    }else {
      switch(order) {
        case 'push_front':  // if (x === 'value1')
          deque.push_front(num)
          break
        case 'push_back':  // if (x === 'value2')
          deque.push_back(num)
          break
        case 'pop_front':
          result.push(deque.pop_front())
          break
        case 'pop_back':
          result.push(deque.pop_back())
          break
      }
    }
  }

  console.log(result.join("\n"))