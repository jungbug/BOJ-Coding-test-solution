const fs = require("fs")
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function check(num){
  let s, b;
  let tmp, cmpNum;

  for (let i = 1; i < Number(input[0]) + 1; ++i){
    s = 0;
    b = 0;
    tmp = input[i].split(' ');
    cmpNum = tmp[0]

    for (let x = 0; x < 3; x++){
      for (let y = 0; y < 3; y++){
        // strike
        if (x == y && cmpNum[x] == num[y])
          s++;
        //ball
        if (x != y && cmpNum[x] == num[y])
          b++;
      }
    }

    // strike 수, ball 수가 입력 값과 다르면 false 반환
    if (s != tmp[1] || b != tmp[2])
      return false;
  }
  return true;
}

{
  let num = '';
  let ans = 0;

  for (let i = 123; i<= 999; ++i){
    num = String(i);

    // 중복된 숫자 제외
    if (num[0] == num[1] || num[0] == num[2] || num[1] == num[2])
      continue;

    // 0 제외
    if (num[0] == '0' || num[1] == '0' || num[2] == '0')
      continue;
  
    if (check(num))
      ans++;
  }

  console.log(ans);
}