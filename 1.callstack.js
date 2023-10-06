function a() {
  // JS는 동기적으로 수행하기 때문에 무거운 작업을 실행하면 좋지않다
  for(let i = 0; i < 10000000000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}
console.log('시작');
const result = c();
console.log(result);
