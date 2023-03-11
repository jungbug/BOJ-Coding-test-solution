import sys
input = sys.stdin.readline

N = int(input())
A = []
for i in range(N):
     A.append((int(input()), i))

sorted_arr = sorted(A) 
answer = [] 

for i in range(N):
    answer.append(sorted_arr[i][1] - A[i][1])

print(max(answer) + 1)