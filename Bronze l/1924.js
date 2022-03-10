const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// month 지정
const month = input[0];

//day 지정
const day = input[1];

//week 지정
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// week 중에서 2007년의 요일을 계산하기
console.log(week[new Date(`2007-${month}-${day}`).getDay()]);