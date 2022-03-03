var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString();
var inputs5 = Number(inputs);
var inputs2 = Number(inputs);
var answer5 = 0;
var answer2 = 0;
while(inputs5 >= 5){
	answer5 += parseInt(inputs5 / 5);
	inputs5 /= 5;
}

while(inputs2 >=2){
    answer2 += parseInt(inputs2 / 2);
    inputs2 /= 2;
}
console.log(Math.min(answer5, answer2));