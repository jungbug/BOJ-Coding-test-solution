const fs = require('fs');
const [firstBasket, secondBasket] = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [A, B] = firstBasket.split(' ').map(Number); 
const [C, D] = secondBasket.split(' ').map(Number);
const answer = A + D >= B + C ? B + C : A + D;
console.log(answer);