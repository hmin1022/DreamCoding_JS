// 연산자 우선순위
let a = 2;
let b = 3;
let result = (a + b) * 4; // 우선으로 계산하고 싶은경우 ()를 사용
console.log(result); 
result = a++ + b * 4;
console.log(result); // 14