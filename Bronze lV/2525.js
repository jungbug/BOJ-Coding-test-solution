const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
 
let curHour = input[0].split(" ")[0];
let curMin = input[0].split(" ")[1];
let cookTime = input[1];
 
solution(+curHour, +curMin, +cookTime);
 
function solution(doneHour, doneMin, cookTime) {
  doneHour += parseInt(cookTime / 60);
  doneMin += cookTime % 60;
 
  while (true) {
    if (doneHour < 24 && doneMin < 60) {
      break;
    }
 
    if (doneHour >= 24) {
      doneHour -= 24;
    } else {
      doneMin -= 60;
      doneHour += 1;
    }
  }
  console.log(doneHour, doneMin);
}