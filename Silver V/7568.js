const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n")
const count = Number(input[0])
let example = []
let result = []
for(let i = 1; i<=count;i++){
    example.push(input[i].split(" "))
}

for(let i = 0; i<count;i++){
    let a = Number(example[i][0])
    let b = Number(example[i][1])
    let num = 5
    example.forEach(v => {
        if(a>v[0] && b>v[1] || a>v[0] && b<v[1] || a<v[0] && b>v[1]){
            num--
        }
    })
    result.push(num)
    num = 5
}

console.log(result.join(" "))



////////////////////////////////



const fs = require('fs');
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

function solution(input) {
	[n, ...person] = input;
	let count = [];

	for (let i = 0; i < n; i++) {
		let rank = 0;
		for (let j = 0; j < n; j++) {
			if (i === j) continue;
			[aWeight, aTall] = person[i].split(' ');
			[bWeight, bTall] = person[j].split(' ');

			if (Number(aWeight) < Number(bWeight) && Number(aTall) < Number(bTall))
				rank += 1;
		}
		count.push(rank + 1);
	}
	return count.join(' ');
}

console.log(solution(input));

