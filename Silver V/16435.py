n,m = map(int, input().split())

nums = list(map(int,input().split()))


nums.sort()

for i in nums:
    if m >= i:
        m += 1
    else:
        break
    
print(m)