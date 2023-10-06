// Map
const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);
console.log(map);

// 사이즈
console.log(map.size);

// 존재여부 (map키로 확인)
console.log(map.has('key2'));
console.log(map.has('key6'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 찾기
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key6'));

// 추가
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부삭제
map.clear();
console.log(map);

// object와 차이점 (구조는 비슷하지만 사용가능한 함수가 map이 더 많다)
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는 우유' };
const obj = {
  [key]: milk,
};
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]); // obj는 동적으로 접근이 가능함
console.log(map2[key]); // map은 동적으로 접근이 불가능함
console.log(map2.get(key)); // get함수를 사용하여 접근