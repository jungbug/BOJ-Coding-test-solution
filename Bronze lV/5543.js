const fs = require('fs');
const [A, B, C, X, Y] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number); const burger = [A, B, C].sort((a, b) => b - a).pop(); const drink = [X, Y].sort((a, b) => b - a).pop();
const setMenu = burger + drink - 50;
console.log(setMenu);