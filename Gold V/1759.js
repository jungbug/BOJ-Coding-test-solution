const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v=>v.split(' '));
const [L,C] = input[0].map(Number) // 4, 6
const alpha = input[1].sort(); // 정렬


const answer = []; 

function myCrypto(s,k){
  let S = s.length;
  if(S==L){
    let cnt = 0;
    for(let i = 0; i<S; i++){
      if(s[i]=='a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u' ){
        cnt++;
      }
    }
    if(cnt>0 && L-cnt>1){
      answer.push(s)
    }
    return;
  }else{
    for(let i = k+1; i<C; i++){
      myCrypto(s+alpha[i],i)
    }
  }
}

myCrypto('',-1)

console.log(answer.join('\n'))