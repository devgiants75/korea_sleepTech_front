// async02.js

//! 비동기 프로그래밍 & 콜백 함수

//? 콜백 함수
function greet(name) {
  console.log(`Hello, ${name}`);
}

//? 메인 함수
// : 사용자의 입력을 처리하는 함수
function getUserInput(callback) {
  // let name = prompt('이름을 입력해주세요.');
  // callback(name);
}

getUserInput(greet);

//# 콜백 함수를 사용하는 비동기 요청 예시
// : 서버와 통신

// cf) fetch: (데이터를) 가져오다
function fetchUserDate(userId, callback) {
  // 시간에 대한 소요: setTimeout() 함수를 사용 구현
  setTimeout(() => {
    // 서버로 부터 가져온 데이터
    const userData = {
      // 가상의 사용자 데이터
      id: userId,
      name: '이승아',
      email: 'devgiants75'
    };

    // 가져온 사용자 데이터로 작업할 기능: 콜백 함수
    callback(userData);
  }, 3000);
}

// 사용자 데이터 처리 함수(콜백 함수)
function handleUserData(user, callback) {
  console.log(`User Data: ${user.name}`);

  // 콜백함수 내에서 함수 실행 후 동작시킬 코드
  // : 중첩된 콜백 함수
  // callback();
}

// fetchUserData() 함수 호출
fetchUserDate(1, handleUserData); // 비동기 처리 로직

console.log('비동기적인 출력'); // 메인 로직

//# 콜백함수의 중첩
// : 콜백 지옥(callback hell)
// - Promise 기반의 비동기 처리 프로그래밍을 사용

function a() {
  console.log('a');
  function b() {
    console.log('b');
    function c() {
      console.log('c');
    }
  }
}

a();