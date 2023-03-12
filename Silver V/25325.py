N = int(input())

students = list(input().split())

d = {}

for i in students:
    d[i] = 0
for i in range(N):
    vote = list(input().split())
    for j in vote:
        d[j] += 1

sorted_dict = sorted(d.items())
tlqkf = sorted(sorted_dict, key=lambda x: x[1], reverse=True)

for key, value in tlqkf:
    print(key,value)