N = int(input())

nums = list(map(int, input().split()))
nums.sort()
sum = 1
for i in nums:
    if sum<i:
        break
    sum += i

print(sum)