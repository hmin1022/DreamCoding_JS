const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({styles: {color}}) { // 2단 구조분해
  console.log(color);
  // console.log(styles); // 변수가 아니기 때문에 접근불가
}
changeColor(prop);