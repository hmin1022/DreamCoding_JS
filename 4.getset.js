// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // fullName값을 부를 때
  get fullName() {
    return `${this.lastName}${this.firstName}`;
  }
  // fullName값에 할당될 때
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('수지', '김');
student.firstName = '안나';
// console.log(student.fullName()); 
// 위에 처럼 함수호출을 하지 않고 설정하는방법이 get과 set이다.
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '김철수';