const fs = require("fs")
const input = fs.readFileSync("dev/stdin").toString().split("\n")
let hour = Number(input[0].split(" ")[0])
let min = Number(input[0].split(" ")[1])
let sec = Number(input[0].split(" ")[2])
let add = Number(input[1])
hour += Math.floor(add/3600)
min += Math.floor((add%3600)/60)
sec += Math.floor((add%3600)%60)

if(sec >= 60){
    sec = sec - 60
    min += 1
}

if(min >= 60){
    min = min - 60
    hour += 1
}

if(hour >= 24){
    hour = hour - 24
}


console.log(`${hour} ${min} ${sec}`)