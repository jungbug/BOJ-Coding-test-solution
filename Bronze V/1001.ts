const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const inputList: number[] = input.map(Number);
console.log(inputList[0] - inputList[1]);

export{}