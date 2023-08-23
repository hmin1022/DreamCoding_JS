function add(a, b) {
  return a + b;
}
const sum = add; // 함수add의 주소를 가지고 있어서 sum을 호출해도 함수가 작용함
console.log(sum(1, 2));

console.log(add(1, 2));
console.log(add()); // NaN