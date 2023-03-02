words = [input() for i in range(20)]

alp = ["A+","A0","B+","B0","C+","C0","D+","D0","F","P"]
num = [4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0]

answer = 0
sum = 0

for i in words:
    a = int(i.split()[1][0])
    b = i.split()[2]
    if b != "P":
        answer += num[alp.index(b)] * a
        sum += a
print(answer/sum)
