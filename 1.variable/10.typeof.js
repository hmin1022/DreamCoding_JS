// JS에서는 타입이 다이나믹하게 바뀐다. 
// dynamic, weakly typed(한가지 타입으로 정해지는 것이 아니라 계속 바뀔 수 있다는 뜻)language 언어다.

// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable);

variable = ""; // 할당된 값에 따라 타입이 결정됨
console.log(typeof variable);

variable = 123; 
console.log(typeof variable);

variable = {};
console.log(typeof variable);

variable = function() {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');