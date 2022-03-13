import sys
from collections import defaultdict
input = sys.stdin.readline
 
n = int(input())
arr = list(map(int, input().split()))
computer = defaultdict(int)
 
for i in range(len(arr)):
    computer[arr[i]] += 1
 
print(sum(map(lambda x: x-1, computer.values())))