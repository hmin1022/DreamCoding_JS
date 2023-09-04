// 카운터를 만들기
// 0이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기
class Counter {
  constructor(value) {
    this.value = value;
  }
  increment() {
    return this.value += 1;
  }
  get value() {
    console.log(this.value);
  }
}

const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.vlaue);