days = [31,28,31,30,31,30,31,31,30,31,30,31]
weeks = ["MON","TUE","WED","THU","FRI","SAT","SUN"]
m,n = map(int,input().split(' '))
a = 1
b = 1
daysIndex = 0
index = 0
while True:
    if(a == m and b == n):
        print(weeks[index%7])
        break;
    
    if(b == days[daysIndex]):
        a += 1
        b = 0
        daysIndex+=1

    
    b+= 1
    index += 1