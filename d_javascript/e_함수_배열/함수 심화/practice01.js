// practice.js

//# 배열 메서드 + 콜백 함수

// 1번 문제
const scores = [75, 82, 59, 94, 68, 72, 89, 55];

function passingScores(scores) {
  // 60점 이상인 점수를 필터링한 배열
  const passing = scores.filter(score => score >= 60);

  // 60점 이상인 점수의 개수
  const passingCount = passing.length;

  // 60점 이상인 점수들의 평균
  const passingAverage = passing.reduce((acc, score) => acc + score, 0) / passingCount;

  // 각각의 변수값을 하나의 배열로 반환
  return [passingCount, passingAverage];
}

// 함수 호출
const result = passingScores(scores);
console.log(result); // [ 6, 80 ]

const passingCount1 = result[0];
const passingAverage1 = result[1];

//! cf) 구조 분해 할당
// : 배열이나 객체의 각 요소를 한번에 각 변수에 할당
// const(let) [변수명1, 변수명2] = [값1, 값2];
const [passingCount2, passingAverage2] = passingScores(scores); // [6, 80]

// >> 구조 분해 할당은 변수 선언 + 초기화
//    : 구조 분해 할당된 배열 안의 각 요소는 개별적인 변수와 동일

// let passingCount2 = 10; 

console.log(`60점 이상의 점수 개수: ${passingCount2}`);
console.log(`60점 이상의 점수 평균: ${passingAverage2}`);
// 60점 이상의 점수 개수: 6
// 60점 이상의 점수 평균: 80

// cf) 구조 분해 할당
const [num1, num2] = [10, 20];
console.log(num1);
console.log(num2);

function add(a, b) {
  return a + b;
}

console.log(add(num1, num2)); // 30

//! 2번 문제
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers
                    .map(num => num + 10)
                    .filter(num => num % 2 !== 0);

console.log(newNumbers); // [ 11, 13, 15 ]

//! 3번 문제
const words = ['apple', 'monkey', 'banana', 'pig', 'grape', 'elephant'];

const filteredWords = (words, substring) => {
  // includes 메서드: 배열, 문자열 등에서 데이터 인자값이 포함되었는지를 검사(boolean값 반환)

  return words.filter(word => word.includes(substring));
}

const containA = filteredWords(words, 'a');
console.log(containA); // [ 'apple', 'banana', 'grape', 'elephant' ]