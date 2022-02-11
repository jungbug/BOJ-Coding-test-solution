const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `c=c=`
)
  .trim()
  .split("");

let croatiaWordCount = 0;

for (let i = 0; i < input.length; i++) {
  let liftWord = input[i - 1];
  let nowWord = input[i];
  let rightWord = input[i + 1];
  let rrWord = input[i + 2];

  if (nowWord === "c") {
    if (rightWord === "=" || rightWord === "-") {
      croatiaWordCount++;
      i++;
      continue;
    }
  }

  if (nowWord === "d") {
    if (rightWord === "-") {
      croatiaWordCount++;
      i++;
      continue;
    }
    if (rightWord === "z" && rrWord === "=") {
      croatiaWordCount++;
      i += 2;
      continue;
    }
  }

  if (nowWord === "l" || nowWord === "n") {
    if (rightWord === "j") {
      croatiaWordCount++;
      i++;
      continue;
    }
  }

  if (nowWord === "s") {
    if (rightWord === "=") {
      croatiaWordCount++;
      i++;
      continue;
    }
  }

  if (nowWord === "z") {
    if (liftWord !== "d" && rightWord === "=") {
      croatiaWordCount++;
      i++;
      continue;
    }
  }

  croatiaWordCount++;
}

console.log(croatiaWordCount);