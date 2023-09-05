// static 정적 프로퍼티, 메서드
// static 함수는 인스턴스에 포함되지 않는다.
class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana', '🍌');
  }
  //인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
// static 함수는 class이름으로만 접근가능
console.log(Fruit.MAX_FRUITS);
// 객체 자체에 있는 함수에는 접근할 수 없다.
// console.log(Fruit.name);
// Fruit.display();

//사용예제
Math.pow();
Number.isFinite(1);