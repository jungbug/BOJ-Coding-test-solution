n = int(input())

dp = [0] * n

for i in range(n):
    dp[i] = list(map(int, input().split()))


for i in range(1,n):
    for j in range(len(dp[i])):
        if(j == 0):
            # 첫번쨰 오른쪽 위만 가능
            dp[i][j] = dp[i-1][0] + dp[i][j]
        elif(j == len(dp[i])-1):
            # 마지막 왼쪽 위만 가능
            dp[i][j] = dp[i-1][len(dp[i])-2] + dp[i][j]
        else:
            # 두개씩 비교하는데 max로 큰거만
            dp[i][j] = max(dp[i-1][j],dp[i-1][j-1]) + dp[i][j]

print(max(dp[n-1][:]))