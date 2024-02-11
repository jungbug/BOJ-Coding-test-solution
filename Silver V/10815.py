n = int(input())
a = list(map(int, input().split(" ")))
m = int(input())
b = list(map(int, input().split(" ")))

answer = []

d = dict()

for i in a:
    d[i] = "1"

for i in b:
    if(d.get(i) == "1"):
        answer.append("1")
    else:
        answer.append("0")

print(" ".join(answer))