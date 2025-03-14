// func03.js

//# 함수 매개변수 (기본 매개변수, 나머지 매개변수) #//

//! 1. 기본 매개변수 (default)
// : 함수에 인자를 전달하지 않았을 때 사용되는 기본값 정의

function defaultFunc(param1=value1, param2=value2) {
}

// cf) 기본 매개변수: 값 전달O-해당 값 / 값 전달X-기본값
// >> 값 전달의 선택이 있을 경우, 무조건적 값 할당이 필요한 데이터보다 뒤에 작성
function greet1(name='비회원 고객', age) {
  console.log(`안녕하세요, ${name}님! ${age}세입니다.`);
}

greet1(50); // 안녕하세요, 50님! undefined세입니다.

function greet2(age, name='비회원 고객') {
  console.log(`안녕하세요, ${name}님! ${age}세입니다.`);
}

greet2(50); // 안녕하세요, 비회원 고객님! 50세입니다.
greet2(40, '이승아'); // 안녕하세요, 이승아님! 40세입니다.