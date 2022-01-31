const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");
 
const numOfInputs = parseInt(input[0]);
 
for(let i = 1; i <= numOfInputs; i++) {
  const [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map(el => parseInt(el))
 
  const p1 = {x: x1, y: y1}
  const p2 = {x: x2, y: y2}
 
  const squaredDistance = getSquaredDistance(p1, p2)
  console.log(findPointsCount(squaredDistance, r1, r2))
}
 
function getSquaredDistance(p1, p2) {
  return ((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2)
}
 
function findPointsCount(d, r1, r2) {
  const squaredSumR = (r1 + r2) ** 2
  const squaredDiffR = (r1 - r2) ** 2
 
  if(d == 0) {
    if(r1 == r2) return -1
    return 0
  } else {
    if(d > squaredSumR || d < squaredDiffR) {
      return 0
    } else if(d == squaredDiffR || d == squaredSumR){
      return 1
    } else if(d < squaredSumR){
      return 2
    }
  }
}
 
