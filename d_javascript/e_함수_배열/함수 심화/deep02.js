// deep02.js

//# 콜백함수를 활용하는 JS의 '내장 함수' #//

//! '배열'이 가지는 콜백 함수 활용
// : 메서드의 형태

// cf) Object.속성 / Object.메서드() >> 객체 내부의 기능과 동작을 사용
// - 메서드: 어딘가에 소속된 함수

//? 배열의 콜백함수 형태
// 배열.메서드(콜백함수)
// : 콜백함수를 가지는 배열 메서드의 공통된 기능 '배열의 순회'
// : 콜백함수는 3가지 선언 형식 모두 사용 가능

//? 배열의 콜백함수의 '인자값'
// [4, 3, 2, 5, 1]
// function callback(value, index, array) {}

// 1) value: 배열에서 순회되는 각 요소의 값
// 2) index: 순회되는 각 요소의 인덱스 번호
// 3) array: 배열 그 자체

// >> 콜백함수의 인자값은 필수 X (주로 value만 사용)
//    : 사용하지 않는 인자값은 생략 가능

// fucntion (value) {}
// fucntion (value, index) {}
// fucntion (, index) {}
// fucntion (,, array) {}

//! 배열의 콜백함수 메서드

//# forEach()
// : 각 요소에 대해 동일한 함수 실행
// - 배열 내부의 요소를 매개변수로 사용하는 콜백함수 호출
// - 사용값 반환 X
console.log('=== forEach ===');

const numbers = [23, 41, 19, 7, 36];

// 배열명.forEach(각 요소에게 적용할 함수-콜백함수)
numbers.forEach(function(value, index) {
  // 모든 요소에 동일하게 적용: 단순한 기능 적용에 불과
  console.log(`${index + 1}번째 요소: ${value}`);
});

//# map()
// : 배열의 각 요소에 대해 함수를 적용 '새로운 배열로 생성하여 반환'
// - 리턴값을 모아 새 배열 생성 후 반환
// >> map 적용 후 배열 요소의 개수 변화 X

console.log('=== map ===');
console.log(numbers); // [ 23, 41, 19, 7, 36 ]

const newNumbers = numbers.map(function(value) {
  let square = value * value;
  return square
});

console.log(newNumbers); // [ 529, 1681, 361, 49, 1296 ]

// cf) 화살표 함수 적용
const newArrowNums = numbers.map(value => value * value); 
// 중괄호(구현부) 생략 시 return 키워드도 생략

console.log(newArrowNums); // [ 529, 1681, 361, 49, 1296 ]

//# filter()
// : 콜백 함수의 리턴값이 true인 요소만 모아서 '새로운 배열을 만드는 함수'
// >> 기존의 배열과 요소 수가 일치하지 않을 수도 있음

const basicArray = [0, 1, 2, 3, 4, 5];

const evenNumbers = basicArray.filter(value => value % 2 === 0);
const evenNumbers2 = basicArray.filter(function (value) {
  return value % 2 === 0;
});

console.log(`원래 배열 ${basicArray}`); // 원래 배열 0,1,2,3,4,5
console.log(`짝수 배열 ${evenNumbers}`); // 짝수 배열 0,2,4