r1, c1, r2, c2 = map(int, input().split())
arr = [[0] * (c2 - c1 + 1) for _ in range(r2 - r1 + 1)]
max_num = 0


def cal(r, c):
    bor = max(abs(r), abs(c))
    default = (bor * 2 - 1) ** 2 + 1

    if r == bor:
        return default + bor * 7 + c - 1
    if c == -bor:
        return default + bor * 5 + r - 1
    if r == -bor:
        return default + bor * 3 - c - 1

    return default + bor - r - 1


for i in range(r1, r2 + 1):
    for j in range(c1, c2 + 1):
        arr[i - r1][j - c1] = cal(i, j)
        max_num = max(max_num, arr[i - r1][j - c1])

for i in range(r2 - r1 + 1):
    for j in range(c2 - c1 + 1):
        print(str(arr[i][j]).rjust(len(str(max_num))), end=" ")
    print()