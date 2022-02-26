const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `baekjoon`
).trim();

let answerArr = [];

for (let i = 97; i <= 122; i++) {
  let alph = String.fromCharCode(i);
  let answer = input.indexOf(alph);
  answerArr += answer + " ";
}

console.log(answerArr);