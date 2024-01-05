from collections import deque
import collections

N,M,V = map(int,input().split())

graph = collections.defaultdict(list)
for i in range(M):
    a, b = map(int,input().split())
    graph[a].append(b)
    graph[b].append(a)
    graph[a].sort()
    graph[b].sort()

def bfs(graph, root):
    visited = []
    queue = collections.deque([root])

    while queue:
        n = queue.popleft()
        if n not in visited:
            visited.append(n)
            if n in graph:
                queue.extend(graph[n])
    return visited

def dfs(graph, root):
    visited = []
    stack = [root]

    while stack:
        n = stack.pop()
        if n not in visited:
            visited.append(n)
            if n in graph:
                stack.extend(reversed(graph[n]))
    return visited

print(*dfs(graph, V))
print(*bfs(graph, V))