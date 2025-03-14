// func01.js (function 함수 키워드 축약형)

//# === 자바스크립트의 함수 === //

//! 1. 함수의 정의
// : 특정 작업을 수행하거나 값을 계산하는 데 사용되는 코드의 묶음(집합)

//! 2. 함수 사용 용도 / 예제

//? 1) 코드 재사용

// EX) 두 수의 합을 계산: f(x) = y
function sum(a, b) { // 함수 정의
  return a + b;
}

// cf) 자바 메서드와의 차이
// 1) 함수 정의 키워드: function
// 2) 반환타입 정의 X
// 3) 매개변수타입 정의 X
// >> 모든 유형의 데이터 전달 가능! 모든 유형의 데이터 값 반환 가능!

let result1 = sum(1, 2); // 함수 호출: 함수명(인자값 전달);
console.log(result1); // 3

let result2 = sum('이', '승아'); 
console.log(result2); // 이승아

//? 2) 모듈화 & 추상화
// : 복잡한 작업을 수행하는 코드를 함수로 분리 
// >> 각 함수가 수행하는 작업에 집중

// cf) 추상화: 특정 기능을 하는 그룹의 공통된 기능을 정의

//? 3) 이벤트 처리
// : 웹 페이지에서 발생하는 다양한 이벤트 처리에 사용

// == Error(웹 문서 없음) ==
// let button1 = document.querySelector('.button1');
// let button2 = document.querySelector('.button2');

// 웹 사이트의 모든 버튼에 적용
// function message() {
//   console.log('버튼이 클릭되었습니다.');
// }

// button1.addEventListener('click', message); // 'button1' 요소에 클릭 이벤트 발생 시 message 기능 적용  
// button2.addEventListener('click', message); // 'button2' 요소에 클릭 이벤트 발생 시 message 기능 적용  
// ========================

/*
! 3. 함수 구현 방법
  function 함수명(매개변수-parameter) {
    return 결과값; (생략 가능)
  }

  ? 함수 명명 규칙: lowerCamelCase 사용, 동사 사용 권장!

  - 매개변수: 함수에 입력으로 제공되는 데이터(값)
  - 결과값(return, 리턴값): 함수가 작업 완료 후 반환하는 데이터(값) - return 키워드로 반환
*/

//! 4. 함수 선언 방식 (3가지)

//& 1) 함수 선언식: function 키워드 사용, 함수명 작성 필수
//  >> '호이스팅' 적용: 함수 선언 전 호출 가능

greet1(); // 안녕하세요!
console.log('== 함수 선언 이전 ==');

// == 함수 선언(정의) ==
function greet1() {
  console.log('안녕하세요! (함수 선언식)');
}

// 함수 호출(사용)
greet1(); // 안녕하세요!

//& 2) 함수 표현식: 함수를 변수에 할당하는 방식(함수명 사용이 선택적)
//  >> '호이스팅' 적용 X: 선언(정의) 이전에 호출 불가

/*
? cf) 함수를 할당하는 변수는 let, const 모두 가능
const 변수명 = function(매개변수) {
  - 함수 기능 작성
  - return 반환값; (선택적)
}

>> 익명 함수: 이름이 없는 함수
*/
// greet2(); - Error(호이스팅 X)
console.log('== 함수 선언 이전 ==');

const greet2 = function() {
  console.log('안녕하세요! (함수 표현식)');
}

// 함수 호출: 변수명();
greet2(); // 안녕하세요! (함수 표현식)

//& 3) 화살표 함수: 기존의 function 키워드를 화살표(=>)로 대체(간결한 작성)
//  >> '호이스팅' 적용 X
// +) 항상 익명함수로 작성
//    'this'가 일반함수와 다르게 바인딩 됨 

/*
let 변수명 = (매개변수-parameter) => {
  - 함수 기능 작성
  - return 반환값;
}
*/

// greet3();
console.log('== 함수 선언 이전 ==');

let greet3 = () => {
  console.log('안녕하세요! (화살표함수)');
}

greet3(); // 안녕하세요! (화살표함수)

// cf) 화살표 함수는 매개변수가 1개 인 경우 소괄호를 
//    , 함수 본문(구현부)이 단일문인 경우 중괄호+return 키워드 생략 가능

const greet4 = name => console.log(`안녕하세요. ${name}님`);

//! 5. 함수의 인자(argument)
// : 함수 사용을 위해 파라미터로 전달되는 값
// - parameter: 변수 선언
// - argument: 변수 할당

greet4('이승아'); // 안녕하세요. 이승아님

//! 6. 함수 호출 방법
// 함수 생성(함수 선언) <> 함수 사용(함수 호출)
// : 함수명(인자값-선택);

//! 7. 함수의 스코프(범위, scope)

// 1) 지역변수(local)
//    : 중괄호 내의 영역(함수 내부)

// 2) 전역변수(global)
//    : 해당 파일(모듈) 내의 영역
//    - 해당 파일 내부에서 어디서든지 접근 가능

let username = '이승아';

function lsa() {
  // 지역변수: 함수 내의 변수(+ 매개변수)
  let job = 'developer';

  console.log(`${username}'s job is ${job}`);
}

lsa(); // 이승아's job is developer

console.log(username); // 이승아
// console.log(job); - Error(지역 변수는 해당 스코프를 벗어나면 사용 불가)

/*
  함수 선언 방식에 따른 Best Practice

  - 일반적 상황: 함수 선언문 (function + 함수명O)
  - 조건부 함수 사용: 함수 표현식 (function + 함수명 선택)
  - 콜백 함수 사용: 화살표 함수(=> + 함수명X)
*/