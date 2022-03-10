N = int(input())
cnt = 0
s, e = 0, 1
t = 1
while e <= N and s <= e:
    if t == N:
        e += 1
        t = t - s + e
        s += 1
        cnt += 1
    elif t < N:
        e += 1
        t += e
    else:
        t -= s
        s += 1
print(cnt)