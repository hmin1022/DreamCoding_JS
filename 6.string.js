const textObj = new String('Hello World');
const text = 'Hello World';
console.log(textObj);
console.log(text);

console.log(text.substring);

// 배열로 String 접근하는 법
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
// String 길이 재는 법
console.log(text.length);

// object로 String 접근하는 법
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

// 어떤 글자가 몇번째에 있는지 확인하는 법
// 처음 부터 찾기
console.log(text.indexOf('l'));
// 끝 부터 찾기
console.log(text.lastIndexOf('l'));

// String 글자와 일치하는지 확인
console.log(text.startsWith('He'));
console.log(text.endsWith('rld'));
// String 글자가 대문자로 반환
console.log(text.toUpperCase());
// String 글자가 소문자로 반환
console.log(text.toLowerCase());

// String의 부분적으로 글자를 가져오는 방법
console.log(text.substring(0, 2));

// String문자 선택한 부분 부터 앞을 자르는 법
console.log(text.slice(2));
// 뒤에서 부터 자르는 법
console.log(text.slice(-2));

// 문자공백을 없애는 법
const space = '      space    ';
console.log(space);
console.log(space.trim());

// 각 공백마다 단어를 끊는 법
const longText = 'Get to the, point';

console.log(longText.split(' '));
// 콤마 단위로 끊는 법
console.log(longText.split(', ', 2));

