const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().split('\n').map(v=>Number(v));
const cases = inputs[0];
let arr = [0, 1, 2, 4];
for(var i=1; i<=cases; i++){
    var num = inputs[i];
    for(var j=4; j<=num; j++){
        arr[j] = arr[j-1] + arr[j-2] + arr[j-3];
    }
    console.log(arr[num]);
}