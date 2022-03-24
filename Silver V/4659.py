if __name__ == '__main__':
    while True:
        password = input()
        if password == "end":
            break
        vowels = "aeiou"
        
        vowel_cnt = 0
        vowel_repeat, consonant_repeat = 0, 0
        temp = ''
        flag = True
        for i in password:
            if i in vowels:     # i가 모음일 경우
                consonant_repeat = 0
                vowel_cnt += 1
                vowel_repeat += 1
                if vowel_repeat >= 3:   # 모음이 3개 연속일 경우
                    flag = False
                if temp == i:   # 같은 글자가 연속 두번일 경우
                    if i == 'e' or i == 'o':    # 'ee'와 'oo'는 허용
                        pass
                    else:
                        flag = False
            else:   # i가 자음일 경우
                vowel_repeat = 0
                consonant_repeat += 1
                if consonant_repeat >= 3:   # 자음이 3개 연속일 경우
                    flag = False
                if temp == i:   # 같은 글자가 연속 두번일 경우
                    flag = False
            temp = i    # 현재 글자를 담아 다음 글자와 비교

        if vowel_cnt < 1:   # 모음이 1개 이하일 경우
           flag = False

        if flag:
            print("<%s> is acceptable." % password)
        else:
            print("<%s> is not acceptable." % password)