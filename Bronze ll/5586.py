li = list(input()) 
a, b = 0, 0 
for i in range(len(li)-2): 
    if li[i] == 'J' and li[i+1] == 'O' and li[i+2] == 'I': 
        a += 1 
    if li[i] == 'I' and li[i+1] == 'O' and li[i+2] == 'I': 
        b += 1 
print(a) 
print(b)