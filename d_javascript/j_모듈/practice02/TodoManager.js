// TodoManager.js

//# 모듈 기능 정의
// : 재사용 될 클래스 정의

//! 1) 속성
// : 할 일 목록 (todos 배열)

//! 2) 메서드
// - 새로운 할 일 추가(생성)
// - 특정 할 일 항목의 완료 상태 토글(수정)
// - 특정 할 일 항목을 제거
// - 저장된 모든 할 일 목록을 반환((전체)조회)

//! +) 할 일 객체 정의
// id: 각 할 일의 고유값
// text: 할 일 내용
// completed: 할 일 완료 여부 (boolean값 - 기본값 false)

//? 이름 붙여 내보내기(Named Export)
// : export 키워드 + 모듈(클래스, 함수, 변수 등)
export class TodoManager {
  // TodoManager 생성자
  constructor() {
    // TodoManager 호출 시 해당 객체에 todos 속성이 생성 & 초기화
    this.todos = []; 
  }

  // 1) 새로운 할 일 추가
  addTodo(text) {
    const newTodo = {
      id: Date.now(), // Date 객체에서 현재 날짜와 시간을 id로 사용
      text,
      completed: false
    };
    this.todos.push(newTodo);
  }

  // 2) 특정 할 일 항목의 완료 상태 토글
  toggleCompleted(id) {
    const todo = this.todos.find(todo => todo.id === id);

    if (todo) {
      // =(할당 연산자)는 우항에서 좌항으로 계산
      todo.completed = !todo.completed;
    }
  }

  // 3) 특정 할 일 항목 제거
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // 4) 모든 할 일 항목 반환
  getTodos() {
    return this.todos;
  }
}