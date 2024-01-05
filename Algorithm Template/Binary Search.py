# 이진 탐색 소스코드 구현 (반복문)
def binary_search(array, target, start, end):
    while(start <= end):
        mid = (start + end) // 2
        # 찾은 경우 중간점 인덱스 반환
        if array[mid] == target:
            return mid
        # 중간점의 값보다 타겟 값이 작은 경우 왼쪽을 탐색
        elif array[mid] > target:
            end = mid-1
        # 중간점의 값보다 타겟 값이 큰 경우 오른쪽을 탐색
        else:
            start = mid + 1
    return None

n, target = list(map(int, input().split()))
array = list(map(int, input().split()))

result = binary_search(array, target, 0, n-1)

if result == None:
	print("원소가 존재하지 않습니다.")
else:
	print(result + 1)
     

# 백준 1920 수 찾기 코드

# from sys import stdin, stdout

# input = stdin.readline


# def binary_search(array, target, start, end):
#     while(start <= end):
#         mid = (start + end) // 2
#         if array[mid] == target:
#             return 1
#         elif array[mid] > target:
#             end = mid-1
#         else:
#             start = mid + 1
#     return 0


# answer = []
# n = int(input())
# a_list = list(map(int, input().split()))
# a_list.sort()
# m = int(input())
# b_list = list(map(int, input().split()))

# for i in range(m):
#     target = b_list[i]
#     answer.append(binary_search(a_list, target, 0, n-1))

# for a in answer:
#     print(a)
