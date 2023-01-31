Nums = list(map(int, input().split()))

if Nums[1] >= Nums[2]:
    print(-1)
else:
    print(int(Nums[0]//(Nums[2]-Nums[1])+1))