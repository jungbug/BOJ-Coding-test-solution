const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

// 문제 풀이
input[0] = input[0].split(" ");
const n = +input[0][0];
const m = +input[0][1];

const site_pwd = {};
for (let i = 1; i <= n; i++) {
  input[i] = input[i].split(" ");
  const site = input[i][0];
  const pwd = input[i][1];
  site_pwd[site] = pwd;
}

const log = [];
for (let i = n + 1; i <= n + m; i++) {
  const site = input[i];
  log.push(site_pwd[site]);
}

// print
console.log(log.join("\n"));