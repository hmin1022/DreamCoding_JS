// 불리언 타입
let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예
let isFree = true;
let isActivated = false;
let isEntrolled = true;
console.log(isActivated);

console.clear();
// Falshy 거짓인 값
console.log(!!0); // 0
console.log(!!-0); // -0
console.log(!!''); // 텅텅빈 값
console.log(!!null); // null
console.log(!!undefined); // undefined
console.log(!!NaN); // NaN

// Truthy 참인 값
console.log(!!1); // 정수
console.log(!!-1); // 음수
console.log(!!'text'); // 문자열
console.log(!!{}); // 텅텅빈 오브젝트
console.log(!!Infinity); // 무한