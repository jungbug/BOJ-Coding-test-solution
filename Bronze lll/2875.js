const fs = require('fs');
let [n, m, k] = fs.readFileSync('./dev/stdin').toString().split(' ');
n = parseInt(n);
m = parseInt(m);
k = parseInt(k);

let count = 0;
while(true) {
  if (n < 2 || m < 1 || n + m - 3 < k) {
    break;
  }

  n -= 2;
  m -= 1;
  count++;
}

console.log(count);