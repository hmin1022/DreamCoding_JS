// 옵셔널 체이닝 연산자(?.) Optional Chaining Operator
// ES11 (ECMAscript 2020)
let item = { price: 1 };
const price = item?.price;
console.log(price); 

let obj = { name: '🐶', owner: {name: 'hyeonmin'}};
function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);