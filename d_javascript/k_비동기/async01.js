// async01.js

//# === 비동기 프로그래밍 ===//
// asynchronous: 비동기적인
// : 아닐 비, 같을 동, 시기 기 >> 시간이 같지 않음
// : 특정 코드의 실행 완료를 기다리지 않고, 다음 코드를 실행하는 프로그래밍 방식

//? 비동기 프로그래밍 활용
// : 실행 흐름을 차단하지 않고 '시간이 오래 소요'되는 작업 처리에 사용
// EX) 네트워크 요청(서버와의 통신), 파일 I/) 등에 주로 사용

//? 비동기 프로그래밍 예시

// 1) 동기 프로그래밍
console.log('== 동기 구현 ==');
function work() {
  const start = Date.now(); // 현재 날짜, 시간을 숫자로 반환

  // for (let i = 0; i < 9999999999; i++) {}

  const end = Date.now();
  
  console.log(end - start + 'ms');
}

work();
console.log('동기 작업 완료 후 실행될 코드 블럭');

// 2) 비동기 프로그래밍
console.log('== 비동기 구현 ==');
function asyncWork() {
  // 콜백함수: 다른 함수의 인자로 전달되는 함수

  // cf) setTimeout(콜백함수, 지연시간ms);
  // : 지연시간 뒤에 콜백함수 호출
  setTimeout(() => {
    const start = Date.now();
    // for (let i = 0; i < 9999999999; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }, 0);

  // >> setTimeout()은 비동기 함수
  //    : 백그라운드에서 작업이 수행 
  //    : 기존의 코드 흐름을 방해하지 X
}
console.log('비동기 작업 시작');
asyncWork();
console.log('비동기 작업 완료 후 실행'); // setTimeout의 비동기 성질로 asyncWork()보다 먼저 출력

function callbackWork(callback) {
  setTimeout(() => {
    const start = Date.now();

    for (let i = 0; i < 9999999999; i++) {}

    const end = Date.now();

    console.log(end - start + 'ms');
  }, 0);

  callback(); // afterwork 함수를 callback이라는 이름으로 전달
}

function afterwork() {
  console.log('작업이 완료되었습니다.');
}

console.log('1. 작업을 시작합니다.');
callbackWork(afterwork);
console.log('2. 시간이 오래걸리는 작업을 기다리지 않습니다.');