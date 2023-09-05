// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

class Employee {
  constructor(name, department, hoursPerMonth, PayRate) {
    this.name = name;
    this.depertment = department;
    this.hoursPerMonth = hoursPerMonth;
    this.PayRate = PayRate;
  }
  payCalculate() {
    return this.PayRate * this.hoursPerMonth;
  }
}
class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}

class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}
const hyeonmin = new FullTimeEmployee('현민', 's/w', '160');
const bob = new PartTimeEmployee('밥', 's/w', '80');
console.log(hyeonmin.payCalculate());
console.log(bob.payCalculate());