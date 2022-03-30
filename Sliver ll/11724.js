const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(...values) {
    values.forEach(value => {
      const node = new Node(value)
      if (!this.head) this.head = node;
      node.prev = this.tail;
      this.tail = node;
      this.size++;
    });
  }
  pop() {
    if (this.size) {
      const node = this.tail;
      this.tail = node.prev;
      this.size--;
      return node.value;
    }
    return -1;
  }
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

const dfs = function (graph, start, visited, stack) {
  if (graph[start].length === 0) {
    visited[start] = true;
    return;
  }
  stack.clear();
  stack.push(start);
  while (stack.size) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      stack.push(...graph[node]);
    }
  }
}

const solve = function () {
  const [N, M] = input.shift().split(' ').map(v => +v);
  const graph = Array.from({length: N+1}, v => []);
  const visited = Array(N+1).fill(false);
  const stack = new Stack();
  input.forEach(uv => {
    const [u, v] = uv.split(' ');
      graph[+u].push(+v);
      graph[+v].push(+u);
  });
  let count = 0;
  for (i=1; i<=N; ++i) {
    if (!visited[i]) {
      dfs(graph, i, visited, stack);
      ++count;
    }
  }
  console.log(count);
}
solve();