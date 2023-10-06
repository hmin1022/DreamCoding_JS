// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ?? null undefined
// || falshy한 경우 설정(할당)
let num = 0;
console.log(num || '-1'); // num의 0값이 falshy로 간주되어 버그가 발생할수도 있다.
// 그런경우 ??를 사용한다
console.log(num ?? '-1');