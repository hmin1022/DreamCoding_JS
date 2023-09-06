// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date());
console.log(new Date('set 6, 2023'));
console.log(new Date('2023-09-06T03:01:13'));

console.log(Date.now());
console.log(Date.parse('2023-09-06T03:01:13'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(8); // 0: 1월
console.log(now.getFullYear());
console.log(now.getDate()); // 0: 1일
console.log(now.getDay()); // 0: 일요일 ... 6: 토요일
console.log(now.getHours());
console.log(now.getTime());
console.log(now);

console.log(now.toString());