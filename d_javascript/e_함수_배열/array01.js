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

let newLength = fruits.push('Cherry');
console.log(newLength); // 3

let lastFruit = fruits.pop();
console.log(lastFruit); // Cherry

let firstFruit = fruits.shift();
console.log(firstFruit); // Apple

newLength = fruits.unshift('mango', 'orange'); // 시작 부분에 하나 이상의 요소를 추가 (,로 나열)
console.log(newLength); // unshift: 수정된 배열의 길이를 반환 // 3

//? cf) 추가: 추가 후의 배열 길이를 반환 
//      삭제: 삭제한 요소를 반환

// splice()
// 1) 추가: splice(시작 인덱스, 0, 아이템 나열)
// cf) splice(시작인덱스, 삭제할 요소의 개수, ...전체 아이템)

console.log(fruits); // [ 'mango', 'orange', 'Banana' ]
fruits.splice(1, 0, 'strawberry', 'coconut');
console.log(fruits); // [ 'mango', 'strawberry', 'coconut', 'orange', 'Banana' ]

// 2) 삭제: splice(시작 인덱스, 삭제할 요소의 개수)
let removedFruits = fruits.splice(1, 2);
console.log(removedFruits); // [ 'strawberry', 'coconut' ]

//? 요소 정렬
// sort(): 오름차순 정렬
// reverse(): 내림차순 정렬
console.log(fruits.sort()); // [ 'Banana', 'mango', 'orange' ]
console.log(fruits.reverse()); // [ 'orange', 'mango', 'Banana' ]

//? === 배열 변환 ===
let fruitValues = ['사과', '바나나', '망고'];

// 1) join('구분자'): 배열의 모든 요소를 연결하여 하나의 문자열로 변환
// >> 구분자 전달하지 않을 경우 ,가 기본값
console.log(fruitValues.join()); // 사과,바나나,망고
console.log(fruitValues.join(' ')); // 사과 바나나 망고
console.log(fruitValues.join('-')); // 사과-바나나-망고
console.log(fruitValues.join(', ')); // 사과, 바나나, 망고

// 2) split(): 문자열을 특정 구분자를 기준으로 분리하여 하나의 배열로 변환
let str1 = '사과,바나나,망고';
let str2 = '사과 바나나 망고';
let str3 = '사과-바나나-망고';

console.log(str1.split(','));
console.log(str2.split(' '));
console.log(str3.split('-')); // [ '사과', '바나나', '망고' ]

//! 다차원 배열
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[0]); // [ 1, 2, 3 ]
console.log(matrix[0][0]); // 1