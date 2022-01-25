let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let star = "*".repeat(2 * Number(input) - 1).split("");
let start = -1;
let end = 2 * Number(input) - 1;
let result = star.join("") + "\n";

for (let i = 1; i < Number(input); i++) {
	start++;
	end--;
	star[start] = " ";
	star[end] = "";
	result += star.join("") + "\n";
}

result = result.split("\n").reverse().slice(1, result.length);

console.log(result.join("\n"));