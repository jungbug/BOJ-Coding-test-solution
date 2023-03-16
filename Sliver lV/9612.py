N = int(input())

d = {}

for i in range(N):
    k = input()
    if d.get(k):
        d[k] += 1
    else:
        d[k] = 1
  
sorted_dict = sorted(d.items(), reverse=True)
sorted_dict.sort(key=lambda x:x[1], reverse=True)
key, value = sorted_dict[0]
print(key,value)