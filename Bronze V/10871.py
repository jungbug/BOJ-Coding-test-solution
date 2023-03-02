a = input()
b = input()
answer = ""

num = int(a.split()[1])

numList = list(map(int, b.split()))

for i in numList:
    if num > i:
        answer += str(i) + " "

print(answer)