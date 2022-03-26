import sys
input = lambda : sys.stdin.readline().strip()

m=int(input())
s=[]
for i in range(m):
    a=input().split()

    if a[0] == 'all':
        s.clear()
        s=[i for i in range(1,21)]
        continue
    elif a[0] == 'empty':
        s.clear()
        continue

    num=int(a[1])
    if a[0] == 'add':
        if num not in s:
            s.append(num)
    elif a[0] == 'remove':
        if num in s:
            s.remove(num)
    elif a[0] == 'check':
        if num in s:
            print(1)
        else:
            print(0)
    elif a[0] == 'toggle':
        if num in s:
            s.remove(num)
        else:
            s.append(num)