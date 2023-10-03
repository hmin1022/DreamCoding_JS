// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다
const fruits = ['🍪', '🍌', '🍙', '🥝'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 8];
const [y, x, z = 0] = point; // 구조 분해 할당을 이용하여 좌표를 쉽게 바꿀 수 있다
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}
// const array = createEmoji();
// console.log(array);

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const hyeonmin = {name: 'hyeonMin', age: '21', job: 's/w engineer'};
function display({name, age, job}) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}
display(hyeonmin);

const {name, age, job: occupation, pet = '강아지'} = hyeonmin; // object를 구조분해
console.log(name);
console.log(age);
console.log(occupation); // job 키 : 으로 바꾸기
console.log(pet);