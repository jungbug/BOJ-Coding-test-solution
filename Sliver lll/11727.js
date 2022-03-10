const fs = require('fs');
let inputs = fs.readFileSync('dev/stdin').toString().trim();
inputs = +inputs
let arr = [0, 1, 3];
if(inputs>2){
    for(let i=3; i<=inputs; i++){
    	arr[i] = (arr[i-1] + 2*arr[i-2]) % 10007;
	}
}
console.log(arr[inputs])