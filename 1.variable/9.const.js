// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수
// 3. 변수
const text = 'hello';
// text = 'hi'; 재할당 불가능

// 1. 상수
const MAX_FRUITS =  5; // 상수선언시 대문자, 단어와 단어사이는 _로 표기

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
// apple = {};
apple.name = 'orange'; // apple의 키에는 접근가능
apple.display = '🍏';
console.log(apple);
