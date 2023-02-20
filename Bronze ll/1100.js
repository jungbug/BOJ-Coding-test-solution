const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const chessBoard = [];
for (let i = 0; i < 8; i++) {
  chessBoard.push(input[i].split(''));
}

let count = 0;
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0 && chessBoard[i][j] === 'F') {
      count++;
    }
  }
}

console.log(count)