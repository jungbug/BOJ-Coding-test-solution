const fs = require("fs");

let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

input = input[0];
solution(input);

function solution(arr) {
	const splitted = arr.split("-");
	let answer = 0;
	if (splitted[0].includes("+")) {
		answer += splitted[0]
			.split("+")
			.reduce((acc, item) => Number(acc) + Number(item), 0);
	} else {
		answer = Number(splitted[0]);
	}

	for (let i = 1; i < splitted.length; i += 1) {
		if (splitted[i].includes("+")) {
			const splittedFromPlus = splitted[i].split("+");
			const sum = splittedFromPlus.reduce(
				(acc, item) => Number(acc) + Number(item),
				0
			);
			answer -= sum;
		} else {
			answer -= Number(splitted[i]);
		}
	}

	console.log(answer);
}