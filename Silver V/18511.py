import sys
import itertools

max_value , N = map(int,input().split())
len_max = len(str(max_value))

numbers = list(map(int, sys.stdin.readline().split()))
numbers.sort(reverse= True)
len_numbers = len(numbers)
flag = 0

while not flag :
    prod = list(itertools.product(numbers,repeat=len_max))
    for i in prod:
        temp = ''.join(map(str,i))
        if max_value >= int(temp):
            print(temp)
            flag = 1
            break

    len_max -= 1