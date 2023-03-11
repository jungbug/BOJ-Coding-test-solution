import sys
n,m=map(int,sys.stdin.readline().split())
tmp=[i+1 for i in range (n)]
for _ in range(m):
    begin,end,mid=map(int,sys.stdin.readline().split())
    tmp[begin-1:end]=tmp[mid-1:end]+tmp[begin-1:mid-1]
print(*tmp)
