// event01.js

//! === 1. 이벤트 정의 ===
// : 웹 페이지에서 발생하는 대부분의 일(사건)을 의미

//! === 2. 이벤트 핸들링 (handle: 다루다) ===
// : 특정 이벤트에 반응해서 특정 동작을 실행하는 것을 의미
// - 이벤트 핸들러(리스너): 특정 이벤트가 발생하면 호출되는 함수

//! JS의 이벤트 종류

// 1) 마우스 이벤트
/*
? click: 요소를 클릭할 때 발생
dblclick: 요소를 더블 클릭할 때 발생
mousedown: 마우스 버튼을 누를 때 발생
mouseup: 마우스 버튼을 뗄 때 발생
mouseover: 요소 위로 마우스를 올릴 때 발생
mouseout: 요소 밖으로 마우스를 뺄 때 발생
mousemove: 마우스가 움직일 때 발생
*/

// 2) 키보드 이벤트
/*
? keydown: 키를 누를 때 발생
keyup: 키를 뗄 때 발생
keypress: 키를 누르고 있을 때 발생
*/

// 3) 폼 이벤트
/*
? submit: 폼을 제출할 때 발생
? change: 폼 요소의 값이 변경될 때 발생
focus: 폼 요소가 포커스를 받을 때 발생
blur: 폼 요소가 포커스를 잃을 때 발생
*/

// 4) 문서/윈도우 이벤트
/*
load: 페이지나 이미지 등이 모두 로드될 때 발생
resize: 윈도우 크기가 변경될 때 발생
scroll: 스크롤할 때 발생
*/

//! === 3. 이벤트 핸들러 '등록' 방법 ===

// cf) 이벤트 핸들러 함수 정의
// : "랜덤 색상 생성 함수" 
// : rgb(r, g, b) - 0 ~ 255까지의 정수가 각각 지정

//? random 함수 정의: 0 ~ 255까지의 랜덤 숫자 생성
function random(number) {
  // 1. Math.random()
  // : 0 이상 1 미만의 부동 소수점 난수(실수의 무작위 값)를 생성하고 반환

  // 2. Math.floor()
  // : 괄호 안의 수를 내림하여 가장 가까운 정수를 생성하고 반환

  return Math.floor(Math.random() * (number + 1))
}

// console.log(random(255));

// EX) 0 이상 101 미만의 정수를 생성
// : 0부터 N까지의 정수 생성 === Math.random() * (N + 1)

// console.log(Math.random()); // 0 <= x < 1
// console.log(Math.random() * 100); // 0 <= x < 100
// console.log(Math.random() * 101); // 0 <= x < 101

// console.log(Math.floor(Math.random() * 101));

//? randomColorFunc 함수 정의: 랜덤 색상 생성
function randomColorFunc() {
  // 'rgb(r, g, b)' 형식과 동일
  // : r, g, b에 각각 0부터 255까지의 무작위 정수 삽입

  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

//# 1) HTML 이벤트 핸들러 속성(프로퍼티)
// : HTML 요소에 직접 이벤트 핸들러 속성을 지정
// - HTML 요소를 JS 객체로 가져와 핸들러 속성을 지정

// 웹문서.선택자를질문('선택자입력');
// : html 요소를 '참조'
const bgButton = document.querySelector('#bgChange');

// +) on- 키워드
// : 이벤트 종류를 웹 문서의 요소에 연결시켜주는 키워드
// - HTML 요소에 함수를 할당하여 이벤트 연결
//    EX) onmouseover, onclick, onchange 등

bgButton.onclick = function() {
  const randomColor = randomColorFunc();

  // document.body.style.backgroundColor = randomColor;
  bgButton.style.backgroundColor = randomColor;
}

//
const keydownSpan = document.querySelector('#keydown');

window.onkeydown = function() {
  keydownSpan.textContent = '안녕하세요 반갑습니다 :)';
}

//# 2) 인라인 이벤트 핸들러
// : HTML 태그에 직접 onclick, onkeydown 등의 이벤트 속성을 사용하여 함수 지정
// - 사용하지 않는 것을 권장 (유지보수와 코드 파싱에 어려움)

const textButton = document.querySelector('#textChange');

function textChangeFunc() {
  const randomColor = randomColorFunc();
  textButton.style.color = randomColor;
}

//& cf) JS 내에서의 HTML 인식
// : 자바스크립트 객체로 인식
// - DOM (Document Object Model)으로 인식

// body > div > p > span 태그
/*
  body {
    div: {
      p: {
        span: 
      }
    }
  }
*/ 

// 1. document.querySelector('선택자');
// : 같은 선택자가 여러 개일 경우 첫 번째 요소만 가져옴

const btnButton = document.querySelector('.btn');
btnButton.onclick = function() {
  console.log('.btn 요소 중 첫 번째 요소가 클릭되었습니다.');
}

// 2. document.querySelectorAll('선택자');
// : 여러 개의 요소 참조를 모두 가져와 한 번에 이벤트 핸들러를 등록
// - 해당 참조값들이 

const divs = document.querySelectorAll('div');

divs.forEach(div => div.onclick = function() {
  // 클릭 이벤트가 일어난 요소 그 자체
  this.style.backgroundColor = randomColorFunc();
});

//# 3) addEventListener 메서드
// : 표준 이벤트 모델
// : HTML 요소에 addEventListener 메서드를 사용하여 이벤트를 등록
// - 한 요소에 여러 개의 이벤트 핸들러 등록 가능

const btnsButton = document.querySelectorAll('.btnsChange');

// addEventLisener()은 인자로 이벤트와 콜백함수를 받음
btnsButton.forEach(btn => {
  // btn은 DOM 요소 (HTML 요소를 객체로 변환)
  btn.addEventListener('click', function() {
    const randomColor = randomColorFunc();
    btn.style.backgroundColor = randomColor;
  });
});

//! === 4. 이벤트 제거하는 방법 ===
// : removeEventListener() 메서드 사용
// - 이벤트 핸들러 제거
const removeButton = document.querySelector('#remove');

let removeChange = () => {
  const randomColor = randomColorFunc();
  removeButton.style.color = randomColor;
}

// 이벤트 리스너 등록
removeButton.addEventListener('click', removeChange);

// cf) 함수 호출 VS 함수 등록
// 함수 호출: 함수명()
//  >> 코드를 읽는 즉시 함수 실행
// 함수 등록: 함수명
//  >> 부가적인 발생, 함수를 전달하여 실행

// 이벤트 리스너 제거
removeButton.removeEventListener('click', removeChange);