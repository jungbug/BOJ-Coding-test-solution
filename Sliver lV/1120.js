const [a, b] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
let min = a.length;
for (let i=0; i<=b.length-a.length; i++) {
    let curMin = 0;
    for (let j=i; j<i+a.length; j++) {
        if (a[j-i] !== b[j]) curMin++;
    }
    if (curMin < min) min = curMin;
}
console.log(min);