N, L, K = map(int, input().split())
 
score = 0
chk = 0
 
for prob in range(N):
    sub1, sub2 = map(int, input().split())
    if sub2 <= L:
        score += 140
        chk += 1
    else:
        if sub1 <= L:
            score += 100
            chk += 1
 
    if chk == K:
        break
 
print(score)