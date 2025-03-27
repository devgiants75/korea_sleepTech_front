// b_todo02.ts
export const tmp = '';

// Todo 항목의 인터페이스 정의
// 각 Todo 항목은 id, task, completed 속성을 가짐
interface ITodoItem { 

}

//! 새로운 Todo 항목을 추가하는 함수(addTodo)
// 주어진 task를 가지고 새로운 Todo 항목을 생성한 뒤, 기존 목록에 추가하여 반환

//! 특정 id를 가진 Todo 항목을 완료 상태로 변경하는 함수(completeTodo)

//! 특정 id를 가진 Todo 항목을 삭제하는 함수(deleteTodo)

//! 특정 id를 가진 Todo 항목의 task를 편집하는 함수(editTodo)

//! 완료된 Todo 항목을 모두 삭제하는 함수(clearCompleted)

//! 모든 Todo 항목을 조회하는 함수(getAllTodos)

//! 특정 상태(completed)에 따라 Todo 항목을 필터링하는 함수(filterTodos)

//! 특정 id를 가진 Todo 항목의 completed 상태를 토글하는 함수(toggleTodo)

//! 모든 Todo 항목의 completed 상태를 일괄적으로 설정하는 함수(setAllTodosCompletion)

//# 함수 사용 예시
let todos: ITodoItem[] = [];