// deep01.js

//# === 콜백 함수(고차 함수) === //

// 자료형: 기본 자료형 VS 참조 자료형(객체, 배열, '함수')
// - JS에서 함수는 '자료형'
//    : 변수에 할당 가능 & '함수의 매개변수로 전달: 인자'

function funcType() {}
console.log(typeof funcType); // function

//! 1. 콜백함수(callback function)
// : 다른 함수의 인자로 전달, 그 함수의 내부에서 실행되는 함수

//! 2. 콜백함수의 필요성(응용 사례)
// - 비동기 처리: 순차적인 코드 흐름을 개발자가 원하는 방식으로 제어
// - 이벤트 리스너 처리: 사용자 행동에 반응하는 이벤트 내부에서 동작 가능
// - 서버 요청 처리, 타이머 함수: 프로그램의 실행 흐름을 제어

//! 3. 콜백함수 예시
// 1) 선언적 함수를 사용한 콜백 함수
console.log('=== 콜백(선언적 함수) ===');

// 복잡한 로직(예시)
function print(index) {
  console.log(`${index}번째 함수 호출`);
}

// 일반 코드 흐름 로직
function callback1(callbackFunc) {
  // callbackFunc 매개변수: 콜백함수(다른 함수의 인자로 전달됨)

  for (let i = 0; i < 3; i++) {
    callbackFunc(i);
  }
}

callback1(print);
// 0번째 함수 호출
// 1번째 함수 호출
// 2번째 함수 호출

// 2) 익명함수를 사용한 콜백 함수
console.log('=== 콜백(익명함수) ===');

const print2 = function(count) {
  console.log(`${count}번째 함수 호출`);
}

callback1(print2); // print2(콜백함수) 함수를 callback1(메인 로직)의 인자로 전달 

// 3) 화살표함수를 사용한 콜백 함수
console.log('=== 콜백(화살표함수) ===');

function callback2(number, callbackFunc, otherFunc) {
  // number값이 짝수면 callbackFunc
  // , 홀수면 otherFunc

  if (number % 2 === 0) {
    callbackFunc(number);
  } else {
    otherFunc(number);
  }
}

const even = even => console.log(`${even} 값은 짝수입니다.`);
const oddNumber = oddNum => console.log(`${oddNum} 값은 홀수입니다.`);

callback2(3, even, oddNumber); // 3 값은 홀수입니다.
callback2(4, even, oddNumber); // 4 값은 짝수입니다.