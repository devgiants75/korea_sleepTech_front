// type07.ts
export const tmp = '';

//! 타입스크립트 함수

//? 함수의 선언과 호출
// : 매개변수와 반환값에 타입 지정 가능

// function 함수명(매개변수: 매개변수타입): 반환타입 {}
function greet(name: string): string {
  return `Hello ${name}`;
}

// cf) 반환 값이 없거나 return 키워드 생략 시 : void 타입 지정 가능

//? 함수에 타입 별칭을 사용하는 경우
// : 화살표 함수 체계를 사용

type ArrowFuncType = (name: string) => string;

const arrowFunc: ArrowFuncType = (name) => {
  return `Hi ${name}`;
}

console.log(arrowFunc('최서윤'));
console.log(arrowFunc('양현석'));

//? 선택적 매개변수와 기본 매개변수
// 1) 선택적 매개변수
// : 함수 호출 시 인자 전달 생략 가능
// : 변수명 뒤에 ? 작성

// 2) 기본 매개변수
// : 기본값을 할당
// : 함수 호출 시 생략하는 경우 기본값을 자동 할당
// : 매개변수명 = '기본값'

function select(name?: string, nickname: string = '개구리') {
  if (name) {
    console.log(`${nickname} is ${name}`);
  } else {
    console.log(`${nickname} is guest`);
  }
}

select(); // 개구리 is guest
select('이승아'); // 개구리 is 이승아
select('강사'); // 개구리 is 강사*****

// cf) 선택적 매개변수와 기본 매개변수를 혼합 사용 시
// : 선택적 매개변수는 반드시!! 필수 매개변수(인자로 전달하는 값) 뒤에 작성!!
// - 기본 매개변수는 필수, 선택적 매개변수 양쪽에 어디든 작성 가능
// - 선택적 매개변수가 앞서는 경우 생략하려면 반드시 undefined 값을 전달

select(undefined, '강사'); // 강사 is guest
select('이도경', '미어캣');

//# +) Rest(나머지) 매개변수
// : 함수에 전달하는 여러 개의 매개변수를 그룹화하여 배열로 전달하는 기능
// - ...연산자(spread 연산자)를 사용하여 매개변수명 앞에 사용

function sum(a: number, b: number, ...c: number[]) {
  return c.reduce((c1, c2) => c1 + c2, 0);

  // c1: 축적값
  // c2: 현재값
  // +) 현재값의 인덱스 번호, 배열 그 자체

  // >> 축적값과 현재값을 계산하여 다시 축적값에 전달
}

console.log(sum(1, 2, 3, 4, 5, 6)); // 18
console.log(sum(1, 2)); // 0
console.log(sum(1, 2, 10, 20, 30)); // 60

//? Rest 매개변수 주의점: 항상 매개변수 리스트의 마지막에 위치!! + 타입 명시는 배열!!