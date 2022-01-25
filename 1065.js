const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim())

const findHansu = (n) => {
    let cnt = 0
    for(let i = 1;i<=n;i++){
        let s = i.toString().split('').map(v => Number(v))
        if(s.length === 1) cnt += 1
        else if(s.length == 2) {
            cnt +=1
        } else if(s.length == 3){
            const diff1 = s[1] - s[0]
            const diff2 = s[2] - s[1]
            if(diff1 === diff2) cnt += 1
        } else {
            const diff1 = s[1] - s[0]
            const diff2 = s[2] - s[1]
            const diff3 = s[3] - s[2]
            if(diff1 === diff2 && diff2 === diff3) cnt += 1
        }
    }
    return cnt
}

console.log(findHansu(input))
