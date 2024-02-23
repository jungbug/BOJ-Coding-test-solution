n = int(input())

dp = [0] * 10000

dp[0] = 1
dp[1] = 2
dp[2] = 3
dp[3] = 5

for i in range(4, n):
    dp[i] = dp[i-1] + dp[i-2]

print(dp[n-1]%10007)