const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
//1.7976931348623157e+308 (e+308 = 10의 308 제곱이다.)

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
// 위에 예제
if(num1 === Number.NaN) {  
}
if(Number.isNaN(num1)) {  
}
if(num1 < Number.MAX_VALUE) {  
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());
// 1.02e+2

// 반올림하여 문자열로 변환
const num4 = 1234.12;
// 1234

// 정수값을 문자열로 반환
console.log(num4.toFixed());
// 1234.12

// 숫자를 문자로 반환
console.log(num4.toString());
// 1234.12

// 원하는 나라의 언어로 반환
console.log(num4.toLocaleString('ar-EG'));
// ١٬٢٣٤٫١٢

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
// 1234.1
console.log(num4.toPrecision(4));
// 1234
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법
// 1.2e+3
if(Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}
const num = 0.1 + 0.2 - 0.2; // 0.1 과 달리 0.10000000000000003 이 나온다.
console.log(num);

function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON; // 미묘한 차이를 감지하고 싶을 때 EPSILON을 사용한다.
} // Math.abs는 절대값을 반환해준다.

console.log(isEqual(1, 1));
// true
console.log(isEqual(0.1, 0.1));
// true
console.log(isEqual(num, 0.1));
// false
