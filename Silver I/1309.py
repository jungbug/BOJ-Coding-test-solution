n = int(input())

dp = [0] * 4

dp[0] = 3
dp[1] = 3
dp[2] = 7

a = 0
b = 0
c = 0

i = 0

while True:
    if(i == n):
        break;
    a = dp[0]
    b = dp[1]
    c = dp[2]

    dp[0] = dp[1]
    dp[3] = c * 2 + b
    dp[2] = dp[3]
    dp[1] = c
    i+=1

print(dp[0] % 9901)