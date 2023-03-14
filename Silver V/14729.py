N = int(input())

l = []

for i in range(N):
    l.append(input().split()[0])

l.sort()


print("\n".join(l[0:7]))