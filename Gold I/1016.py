n,m = map(int,input().split())

def prime_num(a,b):
    answer = b-a+1
    sieve = [False] * (b-a+1)
    i = 2
    while i*i <= b:
        square_number = i**2

        remain = 0 if a%square_number==0 else 1
        j = a//square_number + remain
        while square_number*j <= b: 
            if not sieve[square_number*j-a]:
                sieve[square_number*j-a]=True
                answer-=1
            j+=1
        i+=1        
    print(answer)

prime_num(n,m)