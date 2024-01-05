import heapq

INF = int(1e9)

n, m = map(int, input().split())

graph = [[] for _ in range(n+1)]

for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((c, b))

start, end = map(int, input().split())

heap = []

distance = [INF] * (n+1)

def dijkstra(start):
    distance[start] = 0
    heapq.heappush(heap, (0, start))

    while heap:
        print(heap)
        current_distance, current_node = heapq.heappop(heap)
        if distance[current_node] < current_distance:
            continue
        for d, n in graph[current_node]:
            next_distance = d + current_distance
            if next_distance < distance[n]:
                distance[n] = next_distance
                heapq.heappush(heap, (next_distance, n))