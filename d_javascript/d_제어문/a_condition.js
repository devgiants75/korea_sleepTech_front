// a_condition.js

// cf) 제어문(control)
//    : 조건문, 반복문

//# == 자바스크립트 '조건문' == //
// : 주어진 조건에 따라 코드 실행 흐름을 제어
// : '조건'에는 주로 비교 연산자를 활용
//    >> boolean 값을 통해 조건을 검증
// - if, else, else if, switch 문

//! 1) if문 & else문 & else if문
/*
if (조건식) {
  조건이 참일 때 실행
}
else if (조건식) {
  앞선 조건은 거짓, 해당 조건은 참인 경우 실행
}
...

else {
  조건이 거짓일 때 실행 (앞선 모든 조건이 거짓)
}
*/
let number = 10;
if (number > 0) {
  console.log('양의 정수입니다.');
}

// cf) 변수명(식별자)을 활용한 조건 검증
//    >> false값: 0, '', undefined, null 등

let stringData = '';
let numberData = 0;

if (stringData || numberData) {
  console.log('해당 코드는 실행되지 않습니다.');
}

console.log('정상 실행 코드');

// if/else/else if 예제
let num = 10;

if (num < 0) {
  console.log('음수입니다.');
} else if (num === 0) {
  console.log('0입니다.');
} else {
  console.log('양수입니다.');
}

// cf) 실행될 코드 블럭이 한 줄 일 경우 코드 축약 가능
if (num < 0) console.log('음수입니다.');
else if (num === 0) console.log('0입니다.');
else console.log('양수입니다.');

//? 조건문 예제
// 13살 미만: 어린이
// 13살 이상 20살 미만: 청소년
// 20살 이상: 성인

let age = 14;

if (age < 13) console.log('어린이');
else if (age < 20 && age >= 13) console.log('청소년');
else console.log('성인');

//! 2) switch case문
// : 하나의 표현식 값을 확인하고 해당 값과 일치하는 case문의 코드 블록을 실행

// switch 블럭 내에 case 값들이 나열
// +) 어떤 case와도 일치하지 않을 경우 default문 실행

let fruit = 'banana';

// case의 데이터 유형은 switch 식의 데이터 유형과 동일
switch (fruit) {
  case 'apple':
    console.log('사과');
    // 각 case 실행은 흐름을 제어하지 X
    // : 해당 case 이후의 모든 코드를 실행
    // >> break; (case문 제어 - 중지)
    break;
  case 'banana':
    console.log('바나나');
  case 'train':
    console.log('바나나는 길어 길면 기차');
    break;
  default:
    console.log('일치하는 조건이 없음!');
}

// === if 조건문 VS 삼항 연산자 VS switch문 ===
// 점수를 변수에 담아
// , 해당 점수가 0미만 100 초과일 경우 '유효한 점수가 아닙니다.'

// 90점 이상 A
// 80점 이상 B
// 70점 이상 C
// 60점 이상 D
// 그외의 경우 F 학점 >> 각 학점의 값을 grade 변수에 대입

let score; // 점수
let grade; // 학점

console.log('=== switch문 ===');
// : 조건식에 true값(조건의 결과가 true인 경우) 각각 case에 조건 사용(대입)

score = 35;

switch (true) {
  case (score < 0 || score > 100):
    grade = '유효한 점수가 아닙니다.';
    break;
  case (score >= 90):
    grade = 'A';
    break;
  case (score >= 80):
    grade = 'B';
    break;
  case (score >= 70):
    grade = 'C';
    break;
  case (score >= 60):
    grade = 'D';
    break;
  default:
    grade = 'F';
}
console.log(`학점은 ${grade}입니다.`); // 학점은 F입니다.

console.log('=== if else문 ===');

score = 81;

if (score < 0 || score > 100) {
  console.log('유효한 점수가 아닙니다.');
} else if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else if (score >= 70) {
  console.log('C');
} else if (score >= 60) {
  console.log('D');
} else {
  console.log('F');
};
console.log(`학점은 ${grade}입니다.`);

console.log('=== 삼항 연산자 ===');

score = 91;

grade =
  score > 100 || score < 0
  ? '유효한 점수가 아닙니다.' : score >= 90
  ? 'A' : score >= 80
  ? 'B' : score >= 70
  ? 'C' : score >= 60
  ? 'D' : 'F';

  console.log(`학점은 ${grade}입니다.`);

// ======================= //
true ? console.log('출력A') : console.log('출력B');
false ? console.log('출력B') : console.log('출력A');
console.log('---');
true || console.log('출력A');
console.log('---');
true && console.log('출력A');
// ======================= //

// cf) 조건문 'Best Practice'
// 1) 비교 연산자 사용 시 '==' 대신 '===' 사용 권장

console.log(0 == false); // true
console.log(0 === false); // false

// 2) 논리 자료형에 변수명(식별자) 사용 시 일치/불일치 생략 가능
let isTrue = true;
if (isTrue === true) console.log('isTrue는 참이다.'); // (X)
if (isTrue) console.log('isTrue는 참이다.'); // (O)

if (isTrue !== true) console.log('isTrue는 참이 아니다.'); // (X)
if (!isTrue) console.log('isTrue는 참이 아니다.'); // (O)

let str = '';
if (str) console.log('빈 문자열입니다.');