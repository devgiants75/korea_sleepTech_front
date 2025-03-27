// b_비동기.ts
export const tmp = '';

//! == 비동기 처리 프로그래밍 == //
// : 앞선 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 실행하는 것
// - 프로그램의 메인 흐름과 병렬적으로 작업할 수 있는 프로그래밍 방식

//? 장단점
// 장점: 병렬 처리와 효율성, 응답성 향상
// 단점: 복잡성 증가, 디버깅 어려움

//? 콜백 함수
// : 다른 함수의 인자로 전달되는 함수

// cf) setTimeout(A, B)
//     : 인자로 함수(A)를 전달받음, 지연 될 시간(B)을 밀리초 단위로 작성

function syncFunc01() {
  setTimeout(() => {
    // 시간 지연을 위한 계산식
    let sum = 0;

    for (let i = 0; i < 9999999999; i++) {
      sum += i;
    }

    console.log(`시간이 오래 걸리는 계산식 결과: ${sum}`);

  }, 10); // 비동기 처리를 위한 시간 값
}

function syncFunc02() {
  setTimeout(() => {
    let sum = 0;

    for (let i = 0; i < 100; i++) {
      sum += i;
    }

    console.log(`두 번째 작업(첫 번째 작업을 기다리지 않음): ${sum}`);
  }, 0); // 지연 시간 0 설정: 코드 대기 없이 곧바로 실행!
}

function example() {
  console.log(`첫 번재 작업 시작`); // (1)
  syncFunc01(); // 시간이 오래걸리는 작업 // (4)

  console.log('두 번째 작업 시작'); // (2)
  syncFunc02(); // (3)
}

example();