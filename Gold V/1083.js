const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const n = parseInt(input[0]);
const a = input[1].split(' ').map(x => parseInt(x));
let s = parseInt(input[2]);

let cnt = 0;
for (let i = 0; i < n - 1; i++) {
  let max_idx = i;
  for (let j = i + 1; j < n; j++) {
    if (a[max_idx] < a[j] && j - i <= s) {
      max_idx = j;
    }
  }
  cnt += max_idx - i;
  if (max_idx !== i) {
    let temp = a[max_idx];
    for (let j = max_idx; j > i; j--) {
      a[j] = a[j-1];
    }
    a[i] = temp;
  }
  s -= max_idx - i;
  if (s < 0) {
    break;
  }
}
console.log(a.join(' '));