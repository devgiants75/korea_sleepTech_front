// main.js (실행 파일)

//! 1) add: Named Import
// 내보내는 모듈에서 이름을 지정
import { add } from './mathModule.js'; 
console.log(add(10, 5)); // 15

//! 2) subtract: Default Import
// : 기본 내보내기 - 사용하는 모듈에서 이름 지정 가능
import subtraction from './mathModule.js';
console.log(subtraction(5, 3)); // 2

//! 3) multiply: Named Import (as 구문)
import { multiply as mp } from './mathModule.js';
console.log(mp(5, 6)); // 30

//! 4) divide: 모듈 전체 가져오기 (import * as 별칭)
import * as mathModule from './mathModule.js';
console.log(mathModule.divide(8, 2)); // 4
console.log(mathModule.add(8, 2)); // 10