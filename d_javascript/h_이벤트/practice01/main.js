// main.js

//! 간단한 투두 리스트 만들기
/*
  - input 태그에 할 일을 입력
  - 추가 버튼 클릭으로 할 일을 추가
  - 할 일은 ul 태그 내에 li 태그로 저장
*/ 

let todoInput = document.querySelector('#todo-input');
let addButton = document.querySelector('#add-button');
let todoList = document.querySelector('#todo-list');

function addTodo() {
  // input 태그에 입력 값이 있는 경우
  if (todoInput.value !== '') {
    // 동적으로 li 태그 생성
    // : document.createElement('태그명');
    // - 생성된 태그가 곧바로 웹 문서에 할당되지 X
    // - 보여질 위치의 부모 요소에 삽입
    let newItem = document.createElement('li');

    // 새로운 li의 내용 값 = input 창의 입력 값;
    newItem.textContent = todoInput.value;

    // 요소에 class 속성 추가
    // : HTML요소.classList.add('클래스명')
    newItem.classList.add('todo-item');

    // 생성된 li태그를 ul태그 내에 삽입
    // : 부모요소.appendChild(자식요소);
    todoList.appendChild(newItem);

    //? input 등과 같이 상호작용 된 데이터는 사용하고나면 해당 데이터 초기화
    todoInput.value = '';
  }
}

// 추가 버튼 클릭 시
addButton.addEventListener('click', addTodo);

// +) Enter 키보드 클릭으로 할 일 등록
//    : Enter 키 입력 시 (todoInput 요소 내)
todoInput.addEventListener('keydown', (e) => {
  // e.key : 키보드 이벤트 발생 시 입력된 키 값이 반환
  if (e.key === 'Enter') {
    addTodo();
  }
});

// e: 이벤트 객체
// - target: 이벤트가 발생한 요소를 참조
// - currentTarget: 이벤트가 첨부된 요소(todoList)
todoList.addEventListener('click', (e) => {
  // 각 할 일 리스트 클릭 시
  // : 완료한 경우 .completed 속성을 추가
  // : CSS 디자인 첨부

  // e.target: 실제 이벤트가 발생되는 요소
  // +) DOM 요소의 태그명 가져오기
  //    : HTML요소.tagName 
  //    : 태그명의 알파벳이 모두 대문자 표기
  if (e.target.tagName === 'LI') {

    // HTML요소.classList: class 속성에 접근

    // cf) .toggle('클래스명') 속성
    // >> classList에서 해당 클래스명이 토글
    //    : 작성되어 있는 경우 - 삭제
    //    : 작성되어 있지 않은 경우 - 명시
    e.target.classList.toggle('completed');
  }
});

//! 남은 글자 수 출력하기
document.addEventListener('DOMContentLoaded', () => {
  const wordInput = document.querySelector('#word-input');
  const p = document.querySelector('#para');

  wordInput.addEventListener('keyup', (e) => {
    const length = wordInput.value.length;
    p.textContent = `글자 수: ${length}`;
  })
});