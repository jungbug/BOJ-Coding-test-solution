const word = require("fs").readFileSync("/dev/stdin").toString().trim();
const len = word.length/2;
const left = word.slice(0, parseInt(len));
const right = word.slice(Number.isInteger(len)?len:parseInt(len)+1);
if (left === right.split("").reverse().join("")) console.log(1);
else console.log(0);