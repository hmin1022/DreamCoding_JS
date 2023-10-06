let count = 0;
export default function increase() { // export default: 하나만 외부로 노출시킴
  count++;
  console.log(count);
}
export function getCount() { //export: 여러개를 외부로 노출시킴
  return count;
}