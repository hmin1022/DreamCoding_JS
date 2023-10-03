// Sperad 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다
// 순회가 가능한 모든 것은 펼쳐 질 수 있다
// func(...iterable)
// [iterable]
// { ...obj }
// EcmaScript 2018
function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

// Rest Parameters
function sum(first, second, ...nums) { // 첫번째와 두번째를 제외한 나머지는 배열로 묶어서 나타냄
  console.log(nums);
}
sum(1, 3, 6, 2, 5, 7, 8);

// Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🍌'];
arr = [...fruits1, '🍪', ...fruits2];
console.log(arr);

// Object
const hyeonmin = {name: 'hyeonMin', age: '21'};
const updated = {
  ...hyeonmin,
  job: 's/w engineer',
};
console.log(hyeonmin);
console.log(updated);