import sys
import itertools

def calculate(num_list, n):
    result = 0
    if n in num_list:
        print(result)
        return

    num_list = [0] + num_list

    num_list.sort()
    for idx in range(len(num_list)-1):
        section_f = num_list[idx]
        section_e = num_list[idx+1]
        if n in range(section_f, section_e):
            break

    ab_list = list(itertools.combinations(range(section_f+1, section_e),2))
    for tmp_ab in ab_list:
        if n in range(tmp_ab[0],tmp_ab[1]+1):
            result += 1

    print(result)

if __name__ == '__main__':
    count = int(sys.stdin.readline())
    num_list = list(map(int, sys.stdin.readline().split()))
    n = int(sys.stdin.readline())
    calculate(num_list, n)