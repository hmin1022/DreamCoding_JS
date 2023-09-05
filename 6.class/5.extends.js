// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자');
//   }
//   sleep() {
//     console.log('잔다');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('먹자');
//   }
//   sleep() {
//     console.log('잔다');
//   }
//   play() {
//     console.log('놀자');
//   }
// }

class Animal {
  eat() {
    console.log('먹자');
  }
  sleep() {
    console.log('잔다');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // 부모클래스에 color값을 전달
    this.ownerName = ownerName; // Dog 클래스 내에서만 ownerName 설정
  }
  play() {
    console.log('놀자');
  }
  // 자식 클래스에서 부모 클래스에 함수를 덮어씌우는 것이 overriding이다.
  eat() {
    super.eat(); // 부모의 함수(super) 호출 가능
    console.log('흰둥이가 먹는다');
  }
}
const dog = new Dog('흰둥이', '현민');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();