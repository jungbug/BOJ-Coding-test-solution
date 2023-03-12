n,m = map(int, input().split())

l = []

answer = 0

kids = list(map(int, input().split()))

for i in range(1,n):
    l.append(kids[i] - kids[i-1])

l.sort()
for i in range(n-m):
    answer += l[i]

print(answer)