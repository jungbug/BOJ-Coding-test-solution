import sys

N = int(sys.stdin.readline())
sold = sorted(list(map(int, sys.stdin.readline().split())))

# 1 2 4 7 8
# 1 2 3 4 5 두 배열의 각 원소를 순서대로 비교해나감. 서로 값이 다를 경우 해당 순서의 자리가 빈 것
for i in range(1,N+1) :
    if(sold[i-1] != i) :
        print(i)
        sys.exit()

#배열 중간에 빈 자리가 없는 경우
print(N+1)