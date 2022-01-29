const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
const a = Number(input[0].split(" ")[0])
const b = Number(input[0].split(" ")[1])
let result = ""

let flag = true

let wrong = 0
let t = 0
let g = 0
let s = 0
let DnaA = 0

for(let m = 0;m<b;m++){
    t = 0
    g = 0
    s = 0
    DnaA = 0
    for(let n =1; n<=a;n++){
        if(input[n][m] == "T"){
            t++
        }else if(input[n][m] == "G"){
            g++
        }else if(input[n][m] == "A"){
            DnaA++
        }else{
            s++
        }
    }
    
    if(t>g && t>s&& t>DnaA){
            result += "T"
            wrong += (a-t)
            flag = false
        }else if(g>t && g>s&& g>DnaA){
            result += "G"
            wrong += (a-g)
            flag = false
        }else if(s>g && s>t&& s>DnaA){
            result += "C"
            wrong += (a-s)
            flag = false
        }else if(DnaA>g && DnaA>s&& DnaA>t){
            result += "A"
            wrong += (a-DnaA)
            flag = false
        }else if(t==g && g==DnaA&&DnaA==s&&s==t){
            result += "A"
            wrong += (a-t)
            flag = false
        }else if(t==g && flag){
            result += "G"
            wrong += (a-t)
        }else if(t==DnaA && flag){
            result += "A"
            wrong += (a-t)
        }else if(t==s && flag){
            result += "S"
            wrong += (a-t)
        }else if(g==s && flag){
            result += "G"
            wrong += (a-s)
        }else if(g==DnaA && flag){
            result += "A"
            wrong += (a-g)
        }else if(DnaA == s && flag){
            result += "A"
            wrong += (a-s)
        }
        flag = !flag
}
let end = result + "\n"
end += wrong

console.log(end)