import heapq

N = int(input())
cards = []
answer = 0

for i in range(N):
    heapq.heappush(cards, int(input()))

if len(cards) == 1:
    print(0)
else:
    while len(cards) > 1:
        add = heapq.heappop(cards) + heapq.heappop(cards)
        answer += add
        heapq.heappush(cards, add)
    print(answer)