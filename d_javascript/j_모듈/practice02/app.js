// app.js

//? 이름 붙여 가져오기
// : import { 모듈명 } from '파일명.확장자';
import { TodoManager } from "./TodoManager.js";

// cf) 모듈을 가져올 경우 import문은 파일의 최상단에 작성을 권장

//# 프로젝트 기능 정의
// - TodoManager 모듈의 기능을 사용하여 할 일 앱을 구현
// - 이벤트 등록, 할 일 목록 수정 등 로직을 담당

//? TodoManager의 인스턴스를 생성
const todoManager = new TodoManager();

//? HTML 요소 가져오기
const form = document.querySelector('#new-todo-form');
const input = document.querySelector('#new-todo');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
  // form 요소 내부에서 submit 이벤트 발생 시
  // - input 요소 type="submit" 속성
  // - button 요소 type="submit" 속성 
  
  // form 요소에서 submit 이벤트 발생 시 '기본 제출 이벤트를 방지'
  e.preventDefault(); 

  // form 내부 input의 데이터를 할 일 목록에 추가
  const text = input.value.trim();

  if (text !== '') {
    // 텍스트가 비워져있지 않다면
    todoManager.addTodo(text);
    input.value = '';
    updateTodoList(); // 리스트 업데이트
  }
});

// 할 일 목록 업데이트 함수
function updateTodoList() {
  // 모든 할 일 목록을 가져오기
  const todos = todoManager.getTodos();

  // ul 태그 내부의 데이터(내용) 삭제
  // : HTML.innerHTML
  // : 요소 내부의 전체 HTML 코드를 문자열로 반환
  todoList.innerHTML = '';

  todos.forEach(todo => {
    // 태그에 사용될 텍스트를 전달
    const li = document.createElement('li');
    li.textContent = todo.text;

    // 순회되는 요소의 완료 여부가 true일 경우
    // : 디자인 변경
    if (todo.completed) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }

    li.addEventListener('click', () => {
      todoManager.toggleCompleted(todo.id);
      updateTodoList(); // 완료 여부값 변화에 따른 전체 리스트 업데이트
    });

    // <button class="delete-button">X</button>
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');

    // 삭제 버튼 클릭 시 해당 할 일 항목 제거
    deleteButton.addEventListener('click', () => {
      todoManager.removeTodo(todo.id);
      updateTodoList();
    });

    // ul >> li >> button
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}
updateTodoList();