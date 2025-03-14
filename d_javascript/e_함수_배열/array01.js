// array01.js

//# JS의 배열 #//
// : 여러 개의 데이터를 순차적으로 나열한 자료 구조
// +) 다양한 타입을 하나의 배열에 저장 가능
// +) 배열의 크기가 고정 X (동적)

// - 인덱스 번호: 0부터 시작
// - 각 데이터: 요소

//! 1. 배열 생성 방식
// 1) 리터럴(literal, 문자 그대로의) 방식

let fruits = ['사과', '오렌지', '망고']; // 대괄호 안에 원하는 요소를 ,로 구분하여 나열
let numbers = [1, 2, 3, 4, 5];
let empty = [];
let variableValues = [1, '문자', true, undefined, null, [1, 2, 3]];

// 2) Array 생성자 사용 방식
// : 새로운 배열 생성 시 배열 크기, 초기값 지정 가능

let arrayFruits1 = new Array(3);
let arrayFruits2 = new Array('사과', '오렌지', '망고');

//! 2. 배열의 활용
//? 1) 요소 접근 & 수정
const sports = ['축구', '야구', '농구'];

console.log(sports[1]); // 배열명[인덱스번호] // 야구

sports[2] = 'basketball';
console.log(sports); // [ '축구', '야구', 'basketball' ]

const basketball = '농구';
// basketball = 'basketball'; - 상수 재할당 불가

// cf) 참조 자료형: 함수, 배열, 객체 등
//      >> 실제 데이터 X, 메모리 주소를 저장하여 '참조'

//? 요소 길이
console.log(sports.length); // 3

// cf) JS 배열은 동적 배열: 임의로 배열의 크기를 수정 
//    >> 새로운 공간의 타입은 'undefined'
sports.length = 6;
console.log(sports[3]); // undefined

sports[5] = '배구';
console.log(sports); // [ '축구', '야구', 'basketball', <2 empty items>, '배구' ]

//? 배열 탐색 & 정보 확인
// : JS의 배열이 가지는 기본 기능
// - 배열명.기능명();

let snacks = ['칸쵸', '초코송이', '포테토칩', '초코송이'];

// 1) indexOf(요소값): 찾는 요소의 첫 번째 인덱스를 반환 (없으면 -1)
console.log(snacks.indexOf('초코송이')); // 1
console.log(snacks.indexOf('꼬깔콘')); // -1

// 2) lastIndexOf(요소값): 배열의 끝부터 찾는 요소의 첫 번째 인덱스를 반환 (없으면 -1)
console.log(snacks.lastIndexOf('초코송이')); // 3

// 3) includes(): 배열에 해당 요소의 존재여부를 확인
let hasPotato = snacks.includes('포테토칩');
console.log(hasPotato); // true: boolean값 반환

//? 배열 조작 함수
fruits = ['Apple', 'Banana'];

// 1) 추가: push(): 맨 마지막에 요소 추가
// 2) 삭제: pop(): 맨 마지막 요소 제거 + 해당 값 반환
//          shift(): 제일 첫 번째 요소 제거 + 반환
//          unshift(): 제일 첫 번쩨에 하나 이상의 요소를 추가 (+ 수정된 배열 길이를 반환)
// +) splice(): 추가 & 삭제