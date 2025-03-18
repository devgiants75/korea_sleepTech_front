// obj01.js

//! 자바스크립트 내장 객체
// : 특정 작업 수행이나 복잡한 기능을 담은 메서드와 속성 제공

//# 1. Number 객체의 기본 메서드
// : 수치형 데이터를 처리하는 속성과 메서드를 포함한 JS 내장 객체(데이터)

// cf) 기본 자료형: number

// 1) toFixed(N): N자리까지 반올림
let num = 123.4567;
console.log(num.toFixed(3)); // 123.457
console.log(num.toFixed(1)); // 123.5
console.log(num.toFixed()); // 123: 자릿수 지정 X -> 소수점 전체 반올림

// 2) isNaN(), isFinite()
// : 각각 NaN값, Infinity값인지 확인
// - Number 객체에서 호출
let notNum = Number('숫자로 변환할 수 없는 값'); // NaN

console.log(notNum);
console.log(notNum === NaN); // false: NaN 값은 비교연산자 사용 X
console.log(Number.isNaN(notNum)); // true

// Infinity: 양의 무한대 / -Infinity: 음의 무한대
// >> 양수 또는 음수를 0으로 나누면 각각 무한대의 수가 생성

console.log(10 / 0);
console.log(-10 / 0);

// in-: 부정
// isFinite(): 유한한 숫자인지를 확인
console.log(Number.isFinite(10 / 0)); // false
console.log(Number.isFinite(10)); // true

//# 2. String 객체의 기본 메서드
// : 문자열을 처리하는 메서드를 제공

// 1) trim(): 문자열 양쪽 공백 제거(띄어쓰기, 줄바꿈)
let str = `
  안녕하세요
  만나서
  반갑습니다 :)

`;

console.log(str.trim()); // 시작과 끝의 공백만 제거!

// 2) split(): 문자열을 특정 기호로 나누어 배열로 반환
let manyData = `
생년,월,일
1999,01,01
2000,02,02
2001,03,03
2002,04,04
`;

console.log(manyData);
manyData = manyData.trim();

// 데이터 내부를 줄바꿈으로 나누고 각 요소를 배열로 반환
// : 줄바꿈 기호 '\n'
manyData = manyData.split('\n');
console.log(manyData);

manyData = manyData.map(line => line.trim().split(','));
console.log(manyData);
// [
//   [ '생년', '월', '일' ],
//   [ '1999', '01', '01' ],
//   [ '2000', '02', '02' ],
//   [ '2001', '03', '03' ],
//   [ '2002', '04', '04' ]
// ]

// 3) length
// : 문자열 길이 반환
console.log(' hello, JS ^^'.length); // 13

// 4) toLowerCase(), toUpperCase(): 대소문자 변환
console.log('HELLO'.toLowerCase());
console.log('hello'.toUpperCase());