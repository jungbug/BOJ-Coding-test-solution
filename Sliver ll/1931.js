const fs = require('fs');
const [x, ...arr] = fs.readFileSync("./dev/stdin").toString().trim().split('\n');



const room = arr.map(v => v.split(' ').map(v2 => +v2)).sort((a, b) => {
  if (a[1] == b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
})

let answer = 1;

let preEnd = room[0][1];
for (let i = 1; i < room.length; i++) {
  if (room[i][0] >= preEnd) {
    preEnd = room[i][1];
    answer++;
  }
}
console.log(answer)