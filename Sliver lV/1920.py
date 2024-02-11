n = int(input())
a = list(map(int, input().split()))
m = int(input())
b = list(map(int,input().split()))

d = dict()

for i in a:
    d[i] = "1"

for i in b:
    if(d.get(i) == "1"):
        print(1)
    else:
        print(0)