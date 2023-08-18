// object 복합 데이터
// object로 묶지 않으면 변경사항이 생길경우 손이 많이 가게 된다.
let name = 'apple';
let color = 'red';
let display = '🍎';
let orangeName = 'orange';

// 그러한 상황에 object를 사용하여 연관된 데이터를 패키지화 시켜 관리하기가 편해진다.
let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
console.log(apple);
console.log(apple.name); // apple의 키에 접근가능
console.log(apple.color);
console.log(apple.display);

let orange = {
  name: 'orange',
  color: 'orange',
  display: '🍊',
};
console.log(orange);