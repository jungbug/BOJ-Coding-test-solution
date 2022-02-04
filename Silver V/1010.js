const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let count = 0;
const input = [];

rl.on("line", (line) => {
    if (!count) {
        count = Number(line);
    } else {
        input.push(line);
        if (input.length === count) {
            main(line);
            rl.close();
        }
    }
}).on("close", () => {
    process.exit();
});

const factorial = (num) => {
    if (num === 1 || num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
};

const main = () => {
    input.forEach((el) => {
        const numbers = el
            .split(" ")
            .map(Number)
            .sort((a, b) => a - b);
        const min = numbers[0];
        const max = numbers[1];
        const answer = factorial(max) / (factorial(min) * factorial(max - min));
        console.log(parseInt(answer + 0.5));
    });
};


///////////////////////

const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().split("\n")
const count = Number(input[0])

for(let i = 1; i<=count;i++){
    let a = 1
    let b = 1
    let num2 = Number(input[i].split(" ")[0])
    let num1 = Number(input[i].split(" ")[1])
    for(let j = 0; j<num2;j++){
    a = (num1-j) * a
}
    for(let k = 1; k<=num2;k++){
    b = b * k
}
    console.log(Math.floor(a/b))
}