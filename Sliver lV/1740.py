n = int(input())
s = []
num = 0
while n > 0:
    s.append(n % 2)
    n //= 2
for i in range(len(s)):
    if s[i] == 1:
        num += 3 ** i
print(num)