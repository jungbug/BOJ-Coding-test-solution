from collections import deque

deque = deque()

N = int(input())

min = 10000000000000

nums = list(map(int, input().split()))
nums.sort()

for i in range(len(nums)):
    deque.append(nums[i])

for i in range(N):
    left = int(deque.pop())
    right = int(deque.popleft())

    if left+right < min:
        min = left + right

print(min)