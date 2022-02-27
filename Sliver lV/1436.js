const fs = require("fs")
let input = +fs.readFileSync("dev/stdin")
let theNumberAtTheEnd = 665;

while (input > 0) {
  theNumberAtTheEnd++;

  if (theNumberAtTheEnd.toString().includes('666')) {
    input--;
  }
}

console.log(theNumberAtTheEnd);