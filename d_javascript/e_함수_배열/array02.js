// array02.js

//# === 데이터의 복사 === //

//! 1. 일반 자료형
// : 원본 데이터와 복사된 데이터가 별도 저장
// - 서로 영향을 끼치지 X

let num1 = 10;
let num2 = num1;

console.log(num2); // 10

num2 = 20;
console.log(num1); // 10 - 원본 데이터 유지
console.log(num2); // 20

//! 2. 참조 자료형
// : 변수명을 할당하는 형식의 복사는 주소값의 전달
// - 원본 데이터 수정 시 같은 주소 체계를 가진 복사 데이터도 수정

let array01 = [11, 22, 33];
let array02 = array01;

console.log(array02); // [ 11, 22, 33 ]

array01[1] = 55;
console.log(array02); // [ 11, 55, 33 ]

array02[2] = 66;
console.log(array01); // [ 11, 55, 66 ]

// >> 원본과 복사본 사이의 값이 공유!

array02 = [1, 2, 3];
console.log(array01); // [ 11, 55, 66 ]
console.log(array02); // [ 1, 2, 3 ]

//? 원본과 복사본의 독립성을 보장 + 복사
// 스프레드 연산자(...)
// : 배열 또는 객체의 요소를 개별 요소로 확장 
//    || 여러 요소를 하나의 형태로 결합 시 사용

// 1) 개별 요소 확장
let sports = ['축구', '야구', '농구'];

let copySports = [...sports];
let copy = ['배구', ...sports ,'수영']; // 독립적인 주소 체계 + 요소의 복사

console.log(copySports); // [ '축구', '야구', '농구' ]
console.log(copy); // [ '배구', '축구', '야구', '농구', '수영' ]

copySports[0] = 'soccer';
console.log(sports[0]); // 축구

// 2) 하나의 형태로 결합
let mergeSports1 = [...sports, ...copy];
let mergeSports2 = [...copy, ...sports];

console.log(mergeSports1); // [ '축구', '야구', '농구', '배구', '축구', '야구', '농구', '수영' ]
console.log(mergeSports2); // [ '배구', '축구', '야구', '농구', '수영', '축구', '야구', '농구' ]