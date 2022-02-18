const fs = require('fs');

const [A, B, C] = fs.readFileSync("/dev/stdin").toString().trim().split('\n')

const timeConvert = (time) => {
  let startTime = 0;
  let endTime = 0;
  for(let i = 0; i<time.length; i++) {
    if(i < 3) {
      if(i === 0) startTime += time[i] * 60 * 60
      if(i === 1) startTime += time[i] * 60
      if(i === 2) startTime += time[i]
    }

    if (i >= 3) {
      if(i === 3) endTime += time[i] * 60 *60
      if(i === 4) endTime += time[i] * 60
      if(i === 5) endTime += time[i]
    } 
  }
  let totalTime = endTime - startTime;
  let totalHour = parseInt((totalTime / 3600) % 24)
  let totalMinute = parseInt((totalTime / 60) % 60)
  let totalSecond = totalTime % 60
  
  return [totalHour, totalMinute, totalSecond];
}

console.log(...timeConvert(A.split(' ').map(Number)));
console.log(...timeConvert(B.split(' ').map(Number)));
console.log(...timeConvert(C.split(' ').map(Number)));