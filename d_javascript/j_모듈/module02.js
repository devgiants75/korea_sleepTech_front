// module02.js

//# 1. export 문
// : 모듈에서 다른 파일로 함수, 변수, 클래스 등을 내보낼 때
// >> 이름 붙여 내보내기, 기본 내보내기

//? 1) Named Export(이름 붙여 내보내기)
// : 하나의 모듈에서 여러 항목 내보내기가 가능, 각 항목이 고유한 이름으로 참조
// - export 키워드 사용

export const PI = 3.14159;

export function multiply(x, y) {
  return x * y;
}

// >> 사용하는 모듈에서
// import { 모듈명 as 식별자, 모듈명 as 식별자 ,,, } from 모듈명(파일명);

//? 2) Default Export(기본 내보내기)
// : 모듈 당 하나의 항목만 내보내기 가능
// : 주로 한 모듈에 하나의 주요 기능이 있는 경우 적합
// - export default 키워드 사용

export default function add(x, y) {
  return x + y;
}

// >> 사용하는 모듈
// import 모듈명(변경X) from '파일명.확장자'

// export default function sum(x, y) {
//   return x + y;
// }
// : 하나의 모듈에는 하나의 기본 내보내기만! 가능!