n = int(input())
array = []
for i in range(n):
    array.append(input())

correct = 0
score = 0

for i in array:
    correct = 0
    score = 0
    for j in range(len(i)):
        if i[j] == "O":
            correct += 1
        else:
            correct = 0
        score += correct
    print(score)