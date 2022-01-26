const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
const summer = input[0];
const growDay = input[1];
const tray = input[2];
const price = input[3];
const realGrowDay = parseInt(summer/growDay) === summer/growDay ? parseInt(summer/growDay) -1 : parseInt(summer/growDay); 
const realPrice = realGrowDay * tray * price;
console.log(realPrice);