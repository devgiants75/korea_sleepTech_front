// module01.js

//! 모듈(module)

//# 1. 모듈의 정의
// : 재사용 가능한 코드 조각
// - 함수, 변수, 클래스, 파일 등 

//# 2. 모듈의 특징
// 1) 각 모듈은 독립성을 가짐
// 2) 다른 코드 내부에서 재사용 가능
// 3) 네임스페이스 관리: 모듈 자체의 이름을 가질 수 있음 (다른 모듈과의 충돌 방지)
// 4) 스코프 격리: 모듈 내의 변수, 함수, 클래스 등은 외부에서 접근 X

//# 3. ES6 모듈
// : ES2015 이후 JS에서 공식적으로 모듈 시스템 도입
// - import, export문 

//? Node.js 환경에서 module(ES6) 모듈 시스템 사용
// : node 시스템에 모듈 사용을 등록
//    >> package.json 파일에 'type: "module"'추가

// 1) 프로젝트 루트 디랙토리(폴더)에 package.json 파일 추가
// : npm init -y

//# == import 문 사용 예시 ==

//? 1) 이름 붙여 가져오기 - 중괄호 사용 O
// : 여러 개의 export가 가능
// > 중괄호 내에서 ,(콤마)로 구분하여 나열

// cf) as: alias 별칭
//    원래 모듈명 as 별칭

import { PI as PIE, multiply as mp } from './module02.js'; 

console.log(PIE); // 3.14159
console.log(mp(2, 3)); // 6

// cf) 전체 모듈을 별칭으로 가져오기
// : 하나의 모듈(파일)을 하나의 별칭으로 가져와
//    , 모듈 내의 모든 기능을 별칭을 통해 접근
// +) 전체 파일을 객체로 파악

import * as module2 from './module02.js';
// import *(전체 파일) as 별칭 from ~
console.log(module2.PI);
console.log(module2.multiply(4, 6)); // 24

//? 2) 기본 가져오기 - 중괄호 사용 X
// import 시 지정된 모듈명을 변경하여 사용 가능
// : 개발자 지정 가능
import sum from './module02.js';
// .module02에서 export default 되는 모듈은 단 하나!
console.log(sum(4, 6)); // 10