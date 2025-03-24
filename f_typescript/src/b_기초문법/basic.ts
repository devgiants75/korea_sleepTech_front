// basic.ts

// let num: number = 10;
/*
  블록 범위 변수 'num'을(를) 다시 선언할 수 없습니다.ts(2451)
  helloWorld.ts(5, 5): 여기서도 'num'이(가) 선언되었습니다.
*/

//! TS의 스코프
// : TS는 파일 단위의 스코프(범위, 영역)가 생성되지 X
// - node_modules가 존재하는 프로젝트 최상단(전체) 범위의 스코프가 전역 스코프로 생성

//? 스코프 생성 방법
// 1. 중괄호 사용법: 직관적인 스코프 생성
{
  let num = 10;
}

{
  let num = 10;
}

// 2. export 키워드 사용법
// : export 키워드 사용 시 ts 파일이 자동 모듈로 인식
// - 외부의 전역 스코프와의 충돌을 방지

export const tmp = ""; // tmp: temporary(일시적인, 임시의)
let num = 10;
console.log(num); // 10

//? JS와의 차이점
let message = "hello";

console.log(message.toUpperCase()); // HELLO

// message();

let message2 = function () {
  console.log("hello");
};

message2(); // hello

//! 코드 포맷터
// ctrl + a: 전체 파일 코드 선택
// ctrl + k + f: 포맷터 진행