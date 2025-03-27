// a_동기.ts
export const tmp = '';

//! == 동기 처리 프로그래밍 == //
// : 코드가 순차적으로 실행되는 것
// - 코드 흐름 예측 용이, 프로그램에 대한 이해가 쉬움

//? 동기 프로그래밍의 장단점
// 장점: 간단성, 명확성 (기준) / 디버깅 용이
// 단점: 응답성 저하 / 코드의 활용(사용)도가 저하

function syncFunc01() {
  // 시간 지연 계산기
  let sum = 0;

  for (let i = 0; i < 9999999999; i++) {
    sum += i;
  }

  return sum;
}

function syncFunc02() {
  let sum = 0;

  for (let i = 0; i < 100; i++) {
    sum += i;
  }

  return sum;
}

function example() {
  console.log('첫 번째 작업 시작');
  let result1 = syncFunc01(); // 시간이 오래걸리는 작업
  console.log(`첫 번째 작업 완료: ${result1}`);

  console.log('두 번째 작업 시작');
  let result2 = syncFunc02();
  console.log(`두 번째 작업 완료: ${result2}`);
}

example();