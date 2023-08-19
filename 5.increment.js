// 증가 & 감소 연산자 Increment & Decrement operators
let a = 0;
console.log(a);
a++; // a = a + 1;
console.log(a);
a--; // a = a - 1;
console.log(a);

// 주의
// a++ 필요한 연산 후 값을 증가
// ++a 값을 증가 후 연산
a = 0;
let b = a++;
console.log(b); // 0
console.log(a); // 1