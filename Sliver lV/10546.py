n = int(input())

d = {}

for i in range(n*2 -1):
    runner = input()
    if (d.get(runner)):
        if (d[runner]):
            d[runner] = 0
        else:
            d[runner] = 1
    else:
        d[runner] = 1

for key, value in d.items():
    if (value == 1):
        print(key)