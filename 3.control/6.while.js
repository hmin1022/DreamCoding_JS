// while(조건) {}
// 조건이 False가 될때까지 {} 코드를 반복 실행
let num = 5;
while(num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;
while(isActive) {
  console.log('loof살아있다');
  if (i === 5) {
    break;
  }
  i++;
}

do {
  console.log('do-while살아있다');
} while (isActive);