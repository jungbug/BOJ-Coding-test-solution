let fs = require('fs');
let input = fs.readFileSync('../stdin').toString().split('\n');
let count = input.shift();
 
function solution(count, input) {
  let row = 0, column = 0; 
 
  for (let i=0; i<count; i++) {
    row += input[i].split('X').filter(v => v.includes('..')).length;
 
    let columnCount = 0;  // 세로로 연속하는 빈 칸의 수
    for (let j=0; j<count; j++) {
      if (input[j][i] === '.') columnCount++;
      if (input[j][i] === 'X' || j === count - 1) {  // 짐이나 벽에 닿았을 때
        if (columnCount >= 2) column++;
        columnCount = 0;
      }
    }
  }
 
  return `${row} ${column}`
}
 
console.log(solution(count, input));