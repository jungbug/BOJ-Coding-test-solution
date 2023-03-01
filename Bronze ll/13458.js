const input = require("fs").readFileSync("/dev/stdin").toString().split(/\s/).map(i => parseInt(i));
const n = input[0];
const a = input.slice(1, n+1);
const b = input[n+1];
const c = input[n+2];
let count = 0;
for (let i=0; i<n; i++) {
    if (a[i] <= b) count++;
    else count += Math.floor((a[i]-b)/c) + ((a[i]-b) % c ? 2 : 1);
}
console.log(count);