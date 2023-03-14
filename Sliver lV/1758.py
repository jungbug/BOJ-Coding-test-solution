N = int(input())

tips = []

money = 0

for i in range(N):
    tip = int(input())
    tips.append(tip)
tips.sort(reverse=True)

for i in range(len(tips)):
    if tips[i] - i > 0:
        money += tips[i] - i
    else:
        break
    
print(money)