import sys
 
N = int(sys.stdin.readline().replace("\n", ""))
 
counts = [0 for _ in range(10)]
 
weight = 1
for step in range(len(str(N))):
    replaced = int(str(N // 10) + "9")
    remaining = replaced - N
    for i in range(len(counts)): counts[i] += (N // 10 + 1) * weight
    for i in range(10-remaining, 10): counts[i] -= weight
    for number in list(str(N)[:-1]):
        number = int(number)
        counts[number] -= remaining * weight
 
    counts[0] -= weight
 
    N //= 10
    weight *= 10
 
print(' '.join(map(str, counts)))


# const n = 543212345

# const countArr = Array(10).fill(0);

# for (let i = 1; i <= n; i++) {
#   const digits = i.toString().split('');
#   digits.forEach(digit => {
#     countArr[Number(digit)]++;
#   });
# }


# 성공 못한 자바스크립트 코드

# const n = 543212345

# const countArr = Array(10).fill(0);

# for (let i = 1; i <= n; i++) {
#   const digits = i.toString().split('');
#   digits.forEach(digit => {
#     countArr[Number(digit)]++;
#   });
# }

# console.log(countArr.join(' '));



# let N = 543212345;
# let counts = new Array(10).fill(0);

# let weight = 1;
# for (let step = 0; step < N.toString().length; step++) {
#   let replaced = parseInt((N / 10).toString() + "9");
#   let remaining = replaced - N;

#   for (let i = 0; i < counts.length; i++) {
#     counts[i] += (Math.floor(N / 10) + 1) * weight;
#   }

#   for (let i = 10 - remaining; i < 10; i++) {
#     counts[i] -= weight;
#   }

#   let strN = N.toString();
#   for (let j = 0; j < strN.length - 1; j++) {
#     let number = parseInt(strN[j]);
#     counts[number] -= remaining * weight;
#   }

#   counts[0] -= weight;

#   N = Math.floor(N / 10);
#   weight *= 10;
# }

# console.log(counts.join(" "));