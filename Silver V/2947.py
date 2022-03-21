import sys

nums = list(map(int, sys.stdin.readline().split(' ')))

while True:
  for i in range(len(nums) - 1):
    if nums[i] > nums[i + 1]:
      temp = nums[i]
      nums[i] = nums[i + 1]
      nums[i + 1] = temp
      print(' '.join(map(str, nums)))

  if nums == [1, 2, 3, 4, 5]: break