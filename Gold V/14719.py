n, m = map(int, input().split())
rains = list(map(int, input().split()))

answer = 0
for i in range(1, m - 1):
    left_max = max(rains[:i])
    right_max = max(rains[i+1:])

    compare = min(left_max, right_max)

    if rains[i] < compare:
        answer += compare - rains[i]

print(answer)