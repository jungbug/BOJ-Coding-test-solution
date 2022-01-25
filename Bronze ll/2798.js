const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(item => parseInt(item));
const n = input[0];
const m = input[1];
const cards = input.slice(2);
let sum = 0;
for(i=0; i<cards.length-2; i++) {
    for(j=i+1; j<cards.length-1; j++) {
        for(k=j+1; k<cards.length; k++) {
            if(cards[i]+cards[j]+cards[k] <= m && cards[i]+cards[j]+cards[k] > sum) {
                sum = cards[i]+cards[j]+cards[k];
            }
        }
    }
}
console.log(sum);