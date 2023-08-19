// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a; // 1
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
  name: '사과',
};
let orange = apple; // orange는 apple의 주소값을 가짐
orange.name = '오렌지'; // apple주소에 name값을 오렌지로 변경
console.log(apple); // apple의 값이 변경됨
console.log(orange);