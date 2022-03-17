const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [n, k] = input[0].split(' ');
function solution(n, k) {
	const queue = [];
	const answer = [];
	for (let i = 0; i < n; i += 1) queue.push(i + 1);
	
	let count = 1;
	while (queue.length) {
		const shiftItem = queue.shift();
		if (count % k === 0) {
			answer.push(shiftItem);
		} else {
			queue.push(shiftItem);
		}
		count += 1;
	}

	console.log(`<${answer.join(', ')}>`);
}

solution(n, k);