N = int(input())

l = []

for i in range(N):
    n,m = map(int, input().split())
    l.append([m,n])
sortedL = sorted(l)
for i in range(len(sortedL)):
    print(f"{sortedL[i][1]} {sortedL[i][0]}")