// deep03.js

//! 배열의 고차함수 메서드

//# reduce()
// : 배열의 각 요소에 대해 함수를 적용하여 '단일 값을 생성'

/*
reduce 메서드의 인자값: 콜백함수, 초기값(initialValue)
! == 함수 표현식 == 
배열명.reduce(function(축적값, 현재값, 현재인덱스, 배열) {

}, 초기값);

! == 화살표 함수 ==
배열명.reduce((축적값, 현재값, 현재인덱스, 배열) => {

}, 초기값);

? cf) 배열명.map(function(현재값, 현재인덱스, 배열) {
  기능 작성
});
*/

// reduce의 축적값: 각 순회마다 축적되는 값(이전 작업물의 반환값, 첫 번째 호출에서는 '초기값' 지정)
// reduce의 초기값: 생략 시 기본값 0

let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((acc, value) => acc + value, 0);

let sum2 = numbers.reduce(function(acc, value) {
  return acc + value;
}, 100);

console.log(sum); // 10
console.log(sum2); // 110

// == reduce 예시 == //
