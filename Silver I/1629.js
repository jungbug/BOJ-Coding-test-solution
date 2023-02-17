const fs = require("fs")
const [A,B,C] = fs.readFileSync("dev/stdin").toString().split(" ").map(v => BigInt(v))

const cal = (a,b) => {
    if(b == 0){
        return BigInt(1)
    }else{
        const temp = cal(a, BigInt(parseInt(b/BigInt(2))))
        if(b % BigInt(2) == 0){
             return  (temp * temp) % C
        }else{
            return (temp * temp * a) % C
        }
    }
}

console.log(parseInt(cal(A,B)))