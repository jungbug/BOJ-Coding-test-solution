N = int(input())

d = {}

count = 0

for i in range(N):
    name = input()
    if name == "ENTER":
        d = {}
    else:
        if d.get(name):
            pass
        else:
            count += 1
            d[name] = 1
print(count)