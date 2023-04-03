words = input() # word input 받기
target = input() # target input 받기

stack = [] # 스택 선언

last = target[-1] # target의 마지막 글자수 가젹오기

for i in words: # for 문 돌기
    stack.append(i) # stack에 값 append
    if(i == last and ''.join(stack[-len(target):]) == target): # i가 last와 같으면 stack에 append 한 문자수 만큼을 빼서 그게 만약 target과 같아면 스택에서 빼기
        for i in range(len(target)): # 스택에서 빼기
            stack.pop()
answer = "".join(stack) # answer에 값 넣기

print(answer) if len(answer) else print("FRULA") # 출력