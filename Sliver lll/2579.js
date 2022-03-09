const fs = require('fs');
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

[N, ...arr] = input;
N = Number(N);
arr = arr.map(i => Number(i));

const dp = new Array(N).fill(0);
dp[0] = arr[0];
dp[1] = Math.max(arr[0] + arr[1], arr[1]);
dp[2] = Math.max(arr[0] + arr[2], arr[1] + arr[2]);

solution(N, arr, dp);

function solution(N, arr, dp) {
    for (let i = 3; i < N; i++) {
        dp[i] = Math.max(arr[i] + arr[i - 1] + dp[i - 3], arr[i] + dp[i - 2]);
    }

    console.log(dp[N - 1]);
}