import sys

input = sys.stdin.readline


# 인풋 받아서 단어 or 퍼즐 따로 배열로 만드는 함수 (두번 반복할거 같아서 함수로 만듦)
def input_func(arr, sign):
    arr = []
    while True:
        input_value = input().strip()
        if input_value == sign:
            break

        arr.append(input_value)
    return arr


words = input_func([], '-')
puzzles = input_func([], '#')

# print(words)
# print(puzzles)

for puzzle in puzzles:
    # print()
    puzzle_dict = {}  # 계산한 결과를 쌓을 dict
    for p in puzzle:  # 퍼즐에서 단어 하나씩 cnt: 단어 갯수, used_cnt: 사용될 수 있는 word에 대해서 사용되는 개수
        if not puzzle_dict.get(p):
            puzzle_dict[p] = {'cnt': 1, 'used_cnt': 0}
        else:
            puzzle_dict[p]['cnt'] += 1

    # pprint.pprint(puzzle_dict)

    for word in words:
        for w in set(word):
            w_cnt = word.count(w)
            # print(w_cnt)
            if not puzzle_dict.get(w) or w_cnt > puzzle_dict[w]['cnt']:  # 알파벳이 퍼즐에 없거나, 퍼즐에 있는 알파벳 개수보다 더 많으면 사용 못함
                break

        else:  # 사용될 수 있는 word는 각 알파벳의 used_cnt 를 +1 해준다.
            for w in set(word):
                puzzle_dict[w]['used_cnt'] += 1

    # pprint.pprint(puzzle_dict)
    
    
    # 답 구하기
    min_cnt, max_cnt = 1e9, 0
    min_words, max_words = [], []
    for key, val in puzzle_dict.items():
        if val['used_cnt'] < min_cnt:
            min_words = [key]
            min_cnt = val['used_cnt']
        elif val['used_cnt'] == min_cnt:
            min_words.append(key)

        if val['used_cnt'] > max_cnt:
            max_words = [key]
            max_cnt = val['used_cnt']
        elif val['used_cnt'] == max_cnt:
            max_words.append(key)

    # print(min_words, min_cnt)
    # print(max_words, max_cnt)

    print(''.join(sorted(min_words)), min_cnt, ''.join(sorted(max_words)), max_cnt)