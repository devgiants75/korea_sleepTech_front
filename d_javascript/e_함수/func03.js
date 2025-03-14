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

//! 2. 가변 매개변수: 함수 호출 시 인자 수의 고정 X, 함수 내부에서 유동적으로 처리

//! 3. 나머지 매개변수
// : JS에서는 '나머지 매개변수'로 가변 매개변수를 구현
// >> 함수에 전달된 인자들을 배열의 형태로 전달 받음

// == 구현 방법 ==
// : 매개변수명 앞에 ...(spread 연산자)를 붙여 정의
// >> 데이터가 지정될 변수가 있는 매개변수 목록들 보다 마지막에 위치
function spreadFunc(num1, num2, ...nums) {
  // ...nums
  // : 배열을 담는 변수
}

function print(num1, num2, ...nums) {
  console.log(nums); // 배열 출력
}

print(1, 2); // []
print(1, 2, 3); // [3]
print(1, 2, 4, 5, 6); // [4, 5, 6]
print(1, 2, 4, 5, 6, 7, 8, 9, 10); // [4, 5, 6, 7, 8, 9, 10]

// cf) Math.min() 함수: 복수의 인자를 받아 그 중 최소값을 반환

//? 매개변수 내의 ...(나머지 매개변수)
//  : 함수의 매개변수에 사용될 때 - 전달된 인수들을 하나의 배열로 모음
function findMin(...numbers) {

  //? ...연산자(spread 연산자)
  //  : 배열의 요소들을 개별 인수로 펼치는 역할
  let minNum = Math.min(...numbers); // 배열의 요소만 전달(배열 자체의 형태 X)
  return minNum;
}

console.log(findMin(31, 23, 54, 32, 12, 55)); // 12