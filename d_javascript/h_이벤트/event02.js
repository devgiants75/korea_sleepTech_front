// event02.js

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

// 이벤트 객체를 전달받아 '이벤트가 발생된 요소'의 배경을 변경
// : event(이벤트 객체).target
function bgChange(event) {
  const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  // event.target: HTML 요소 (JS DOM 객체)
  event.target.style.backgroundColor = randomColor;
}

//! === 이벤트 객체 === //
// : 이벤트 핸들러가 호출될 때
//    , 브라우저가 자동으로 '이벤트 객체'를 생성하여 이벤트 핸들러에게 전달
// - 이벤트와 관련된 다양한 속성과 메서드가 포함

//? 이벤트 객체의 속성과 메서드

//# 1. type
// : 이벤트 유형 지정 ('click', 'change' 등)

//# 2. target
// : 이벤트가 발생한 요소를 '참조'
// - '실질적'으로 이벤트가 발생한 요소
// - 이벤트 발생 시 변경을 적용할 요소를 결정하는 데 유용

//# 3. currentTarget
// : 이벤트 리스너가 실제로 첨부된 요소를 참조

//# 4. preventDefault()
// : 브라우저가 해당 이벤트에 대해 기본적으로 수행하는 동작을 방지

//# 5. stopPropagation()
// : 이벤트가 전파되는 것을 방지

//# +)
// EX) 마우스 이벤트 - 마우스의 위치(좌표), 버튼 상태 등
// EX) 키보드 이벤트 - 눌려진 키에 대한 정보를 포함

//? 이벤트 객체 사용 방법
// : 이벤트가 발생하는 함수(이벤트 핸들러)에 매개변수로 자동 전달
// - 매개변수명 event, evt, e 등으로 명명 권장

//! target
const colorChangeButton = document.querySelector('#colorChangeButton');
colorChangeButton.addEventListener('click', bgChange);

const divs = document.querySelectorAll('.colorDiv');
divs.forEach(div => div.addEventListener('click', bgChange));

//! currentTarget
const container = document.querySelector('#container');
const inners = document.querySelectorAll('.inners');

// 이벤트 핸들러 등록: container
// 이벤트가 발생한 요소: 정해지지 X
container.addEventListener('click', function(event) {
  console.log('클릭된 요소 (target): ', event.target);

  console.log('이벤트 리스너가 부착된 요소 (currentTarget): ', event.currentTarget);

  console.log('이벤트 유형 (type): ', event.type);
});

//! 이벤트의 기본 행동 방지
// form 태그는 submit 버튼 실행 시, 내부의 데이터가 서버에 전송 + 페이지가 리로드
// >> preventDefault()

const form = document.querySelector('form');
const fname = document.querySelector('#name');
const femail = document.querySelector('#email');
const p = document.querySelector('p');

form.onsubmit = function(e) {
  // 이름과 이메일을 반드시 작성하도록 설정
  // : 참조된 요소의 값(내용) 가져오기
  //    >> 참조값.value 속성

  if (fname.value === '' || femail.value === '') {
    // 제출 입력값에 대한 유효성 검증이 모두 이루어지지 않을 때까지
    // , 제출 이벤트에 대한 행동을 방지
    e.preventDefault();

    p.textContent = '이름과 이메일을 모두 입력해주세요.';
  }
}

//! 이벤트 전파 방지
// : stopPropagation();

// '이벤트 전파'
// : 자식 요소에서 발생한 이벤트가 부모 요소로 전달(이벤트 버블링)
let parentDiv = document.querySelector('#parentDiv');
let childButton = document.querySelector('#childButton');

// parentDiv.addEventListener('click', function() {
//   console.log('부모 요소 클릭');
// });

parentDiv.addEventListener('click', () => {
  console.log('부모 요소 클릭');
});

childButton.addEventListener('click', (e) => {
  console.log('자식 요소 클릭');

  // 이벤트 버블링은 자식 > 부모로 진행
  // : 자식요소이벤트객체.stopPropagation() 메서드를 사용 전파 중지
  e.stopPropagation();
});