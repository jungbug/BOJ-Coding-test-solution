const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
	input.push(line.toString());
}).on("close", function () {
	input.pop();
	input = input.map((el) => el.split(" ").map((el) => Number(el)));

	for (let i = 0; i < input.length; i++) {
		if (input[i][0] > input[i][1]) {
			let mn = input[i][1];
			let num = 2;
			while (true) {
				if (input[i][0] === mn) {
					console.log("multiple");
					break;
				} else if (input[i][0] < mn) {
					console.log("neither");
					break;
				}
				mn = input[i][1] * num++;
			}
		} else {
			let factorNum = [];
			let fn = 1;
			while (true) {
				if (input[i][1] % fn === 0) {
					factorNum.push(fn);
				}
				fn++;
				if (fn > input[i][1]) break;
			}
			if (factorNum.includes(input[i][0])) {
				console.log("factor");
			} else {
				console.log("neither");
			}
		}
	}
	process.exit();
});