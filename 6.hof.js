const fruit = ['🍌', '🍓', '🍇', '🍓'];
for(let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// 배열을 돌면서 원하는 것을 하는 방법

fruit.forEach(function(value) {
  console.log(value);
})
fruit.forEach((value) => {console.log(value);});

// 조건에 맞는(콜백함수) 아이템을 찾는 방법
const item1 = { name: '🥛', price: 2 };
const item2 = { name: '🍪', price: 3 };
const item3 = { name: '🍙', price: 1 };
const products = [item1, item2, item3, item2];
const found = products.find((value) => value.name === '🍪');
console.log(found);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '🍪');
console.log(result);