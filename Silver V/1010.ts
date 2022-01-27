const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
// ? require('fs').readFileSync('/dev/stdin')
: `
3
2 2
1 5
13 29
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=> stdin[line++].split(" ").map( v => +v);
})();

function mul(time: number, num: number) {
    let rst = 1;
    for (let i=0; i<time; i++) {
        rst *= num;
        num -= 1;
    }
    return rst;
}

const c = +input();
for (let i=0; i<c; i++) {
    let [n, m] = input();
    if (m/2 < n) n = m - n;

    const top = mul(n, m);
    const bottom = mul(n, n);
    console.log(top/bottom);
}

export{}