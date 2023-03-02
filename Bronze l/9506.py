while True:
    n = int(input())
    if n == -1:
        break
    numbers = []
    for i in range(1,n):
        if n%i == 0:
            numbers.append(i)
    if sum(numbers) == n:
        print(n, " = ", " + ".join(str(i) for i in numbers), sep="")
    else:
        print(n, "is NOT perfect.")