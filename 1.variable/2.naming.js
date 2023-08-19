/**
 * 변수 규칙
 * 라틴문자(0-9, a-z, A-Z), _
 * 대소문자 구별함
 * camelCase (likeThis) ✅
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수문자 ❌ ($, _ 는 예외)
 * 이모지 ❌
 */

let redApple;

// 나쁜예제 💩
let number = 23; // 의미없게 이름짓기

// 좋은예제 ✨
let myAge = 23; // 의미있게 이름짓기

// 나쁜예제2 💩
let audio1; // 오디오끼리 의미가 무엇인지 구분 X
let audio2;

// 좋은예제2 ✨
let windAudio; // 각각 의미있는 오디오 구분 O
let backgroundAudio;

// 꿀팁 🍯
let audioWind;
let audioBackground;
// 공통내용을 앞에, 자세한 내용을 뒤에 써서 검색할 때 audio만 쳐도 관련내용이 나오게 할 수 있다