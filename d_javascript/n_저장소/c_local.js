// c_local.js

//! 로컬 스토리지(local storage)
// : 웹 브라우저가 제공하는 저장 공간
// - 사용자의 컴퓨터에 영구적으로 데이터를 저장
// - HTML5 웹 스토리지 사양의 일부 도입으로 '쿠키'의 공간의 제한을 보완한 저장 용량과 보안성을 제공

//! 1. 로컬 스토리지에 데이터 저장
// : localStorage.setItem(key, value);
// - 웹 브라우저의 저장 공간에 데이터 저장 (브라우저를 닫아도 데이터가 유지)

localStorage.setItem('key', 'value');
localStorage.setItem('username', '이승아');

// cf) 로컬 스토리지의 데이터는 문자열만 저장 가능
// : 기본 자료형 또한 저장 가능 >> 문자열로 인식
localStorage.setItem('userAge', 29);
localStorage.setItem('isStudent', false);

// cf) 로컬 스토리지에 객체나 배열 등의 참조 자료형 데이터 저장 시 
//     : 문자열 형태로 변환
//     : JSON.stringfy()

let userInfo = {
  name: '이도경',
  age: 31
}

localStorage.setItem('userInfo', JSON.stringify(userInfo));

//! 2. 로컬 스토리지 데이터 가져오기
// localStorage.getItem(key);
// : 해당 key가 존재하지 않으면 null 반환

// 1) 기본 자료형
let keyValue = localStorage.getItem('key');
let usernameValue = localStorage.getItem('username');
let userAgeValue = localStorage.getItem('userAge');
let userEmailValue = localStorage.getItem('userEmail');

if (keyValue || userAgeValue || usernameValue || userEmail) {
  console.log(keyValue);
  console.log(userAgeValue);
  console.log(usernameValue);
  console.log(userEmailValue); // null
}

// 2) 참조 자료형
let userInfoData = localStorage.getItem('userInfo');

let userInfoValue = JSON.parse(userInfoData);
console.log(userInfoValue);

// +) 로컬 스토리지 데이터 반환 시 
//    : 데이터의 null값 처리 코드 작성 필수!

//! 로컬 스토리지 데이터 삭제
// : localStorage.removeItem(key);
// - 초기화: localStorage.clear();

localStorage.removeItem('userAge');
localStorage.removeItem('isStudnet');
localStorage.removeItem('isStudent');

localStorage.clear();