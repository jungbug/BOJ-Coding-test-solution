import sys

n, p = map(int, sys.stdin.readline().split())

w, l, g = map(int, sys.stdin.readline().split())

hacked_player = {}
for i in range(p):
    name, t = sys.stdin.readline().split()
    hacked_player[name] = t

point = 0
for j in range(n):
    name = sys.stdin.readline().rstrip()

    if hacked_player.get(name) == 'W':
        point += w
    else:
        point -= l
        if point < 0:
            point = 0

    if point >= g:
        print("I AM NOT IRONMAN!!")
        quit()

print("I AM IRONMAN!!")