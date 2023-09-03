const x = 0;
const y = 0;
// const cordinate = {x: x, y: y}; // key와 value가 이름이 같다면 간략하게 바꿀수 있음
const cordinate = {x, y};
console.log(cordinate);
// 같은 원리로 오브젝트에도 적용가능하다
function makeObj (name, obj) {
  return {
    // name: name,
    name,
    // age: age,
    age,
  };
}
