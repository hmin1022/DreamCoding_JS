// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 방법)
// 2. 클래스 (최신 방법)

// 클래스 Class
class Fruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple, orange는 Fruit 클래스의 instance이다.
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');
console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.emoji);
apple.display();

// obj는 객체이고 어떤 class의 인스턴스도 아니다.
const obj = {name: 'hyeonmin'};