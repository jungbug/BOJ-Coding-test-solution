num = input()
if int(num[len(num)-2:len(num)]) <= 10:
    if num[len(num)-2:len(num)-1] == '0':
        print(int(num[0:len(num)-2])*10+ int(num[len(num)-1:len(num)]))
    else:
        print(int(num[0:len(num)-2]) + int(num[len(num)-2:len(num)]))
else:
    print(int(num[0:len(num)-1]) + int(num[len(num)-1:len(num)]))
 