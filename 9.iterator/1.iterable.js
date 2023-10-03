/**
 * iterable하다는건 순회가 가능하다는 거
 * [Symbol.iterator](): Iterator;
 * 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
 * 순회가능한 객체이다 라는걸 알 수 있음
 * 순회가 가능하면 무엇을 할 수 있나? for..of, spread
 */

const array = [1, 2, 3];
for (const item of array) {
  // iterator를 반환하는 함수 .values, keys, entries, 배열
// for (const item of array.values()) {
// for (const item of array.keys()) {
// for (const item of array.entries()) {
  console.log(item);
}

const obj = { 0: 1, 1: 2 }; // in은 obj안에 key를 출력
for(const item in obj){ // 일반 객체는 of 대신 in을 사용
  console.log(item);
}

const iterator = array.values();
// for(const item of iterator) {
//   console.log(item);
// }
// console.log(iterator.next().value);
// // 1
// console.log(iterator.next().value);
// // 2
// console.log(iterator.next().value);
// // 3
// console.log(iterator.next().value);
// // undefined
// console.log(iterator.next().done);
// // true

// iterator 사용방법
while(true) {
  const item = iterator.next();
  if(item.done) break;
  console.log(item.value);
}