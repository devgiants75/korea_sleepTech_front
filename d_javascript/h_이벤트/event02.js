// event02.js

// 이벤트 객체를 전달받아 '이벤트가 발생된 요소'의 배경을 변경
// : event(이벤트 객체).target
function bgChange(event) {
  const randomNumber = Math.floor(Math.random * 256);

  const randomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

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