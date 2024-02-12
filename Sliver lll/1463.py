n = int(input())
d = [0] * (n+1)
# 테이블 생성

#모든 수의 경우의 수를 다 구할거임 n까지 도달하기 위한
for i in range(2,n+1):
    d[i] = d[i-1] + 1
    if i % 3 == 0:
        d[i] = min(d[i], d[i//3] + 1)
    if i % 2 == 0:
        d[i] = min(d[i], d[i//2] + 1)
print(d[n])