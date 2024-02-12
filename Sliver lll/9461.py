p = [1,1,1,2]
# 1 1 1 2 2 3 
for i in range(4,101):
    p.append(p[i-2]+p[i-3])

def wave(num):
    print(p[num-1])

n = int(input())

for i in range(n):
    wave(int(input()))