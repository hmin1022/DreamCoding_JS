// import { increase as increase1 } from './counter.js';
// import { increase, getCount } from './counter.js';
import * as counter from './counter.js'; // 그룹화해서 가져오는 법
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());