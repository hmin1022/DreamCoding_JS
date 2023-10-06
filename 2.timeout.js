function execute() {
  console.log('1');
  // JS가 setTimeout콜백함수를 만나면 호출한 후 넘어가고
  // 계산이 끝난후 TaskQueue에 들어간 후 Event Loop를 통해 호출한다
  setTimeout(() => {
    console.log('2');
  }, 3000);
  console.log('3');
}
execute();