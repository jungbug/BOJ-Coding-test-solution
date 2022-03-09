const fs = require("fs")
const input = +fs.readFileSync("dev/stdin")
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
        return this.head.value;
    }
 
    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this._size--;
    }
 
    getSize() {
        return this._size;
    }
}

let dask = []

function getLastCard(n){
    const cards = new LinkedList();

    for(let i = 1; i<=n;i++){
        cards.add(i)
    }
    while(true){
        if(cards.getSize() == 1){
            break
        }
        cards.removeHead()
        cards.add(cards.getHead())
        
    }
  
    return cards.getHead()
}

console.log(getLastCard(input))