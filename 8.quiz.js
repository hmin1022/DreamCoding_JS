// 퀴즈
// 1. 문자열의 모든 캐릭터를 하나씩 출력하기
// ex) const text = 'Hello World';
// H
// e
// l
// l
// 0
// ...
const text = 'Hello World';
const num = text.length;
// 내가 푼방법
// calculator = (num) => {
//   for(let i = 0; i < num; i++) {
//     console.log(text[i]);
//   };
// };
// calculator(num);

// 더 간단히 하는 방법
for(let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
// ['user1, user2, user3, user4]
const array = ids.split(', ');
console.log(array);


// 3. 1초에 한번씩 시계(날짜포함) 출력하기
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString('ko-KR'));
}, 1000);