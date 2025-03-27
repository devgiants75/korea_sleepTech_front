// a_todo01.ts
export const tmp = '';

//# 타입스크립트 TODO 리스트 구현

/*
! 데이터 구조
  - 여러 개의 할 일을 저장하는 배열
  - 각 할 일은 객체
  EX) 상품들 >> 상품, 회원들 >> 회원, 할 일들(ITodoItem[]) >> 할 일(ITodoItem)

  cf) 배열 타입 정의: 요소타입[]

! 요구사항 정리
  - Todo(할 일, 객체) 항목의 인터페이스 정의(ITodoItem)
    : id(number), task(string), completed(boolean) 3가지 속성

  - 각 할 일들을 todos 배열로 관리

  - 할 일 리스트를 관리할 수 있는 함수 구현
    : 각 함수는 Todo 항목 배열(todos)를 입력받고 변경된 배열을 반환
    1) addTodo
    2) completedTodo
    3) deleteTodo
*/

//* 1. 할 일 객체의 인터페이스 명시
interface ITodoItem {
  id: number;
  task: string;
  completed: boolean;
}

//* 2. 할 일 추가 함수
function addTodo(todos: ITodoItem[], task: string): ITodoItem[] {
  const newTodo: ITodoItem = {
    //? 기존의 Todo 항목들 중에서 가장 큰 id에 1을 더해 새로운 ID를 생성

    // cf) Math.max()
    // : 인자로 주어진 숫자 중에서 가장 큰 수를 반환
    // - 인자 내에 배열이 포함된 경우 배열 요소 중 가장 큰 값을 반환

    // Math.max(0, ...todos.map(todo => todo.id))
    // : 현재 할 일 중 가장 큰 id 값이 반환

    // cf) ...todos.map(todo => todo.id)
    // : 현재의 할 일 목록을 순회하여 id값만 추출

    /*
      [
        { id: 1, task: '타입스크립트 공부', completed: false },
        { id: 3, task: '자바스크립트 공부', completed: true },
        { id: 4, task: '자바 공부', completed: false }
      ]
    
      >> [1, 3, 4]
    */

    // 첫 번째 인자 0은 리스트가 비워진 경우의 기본값
    // : 가장 작은 id값은 1

    id: Math.max(0, ...todos.map(todo => todo.id)) + 1,
    task: task,
    completed: false
  }

  // 기존 할 일 목록에 새로운 할 일 추가
  // : 스프레드 연산자 (기존 리스트의 요소 + 새로운 요소 >> 새로운 배열을 생성)
  // - 배열의 주소값이 변경되어 '리액트'에서 인지 가능
  const newTodos = [ ...todos, newTodo ];

  //? 배열의 불변성
  // : 기존의 배열에 요소를 추가하는 경우(push) 배열의 변화를 '리액트'에서 인지하지 못함
  // cf) todos.push(newTodo);

  return newTodos;
}

function completedTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  const changeTodos: ITodoItem[] = todos.map(todo => 
    // 순회되는 각 요소의 todo.id === 매개변수의 id
    // : 같을 경우 순회되는 요소의 completed 속성만 변경
    // : 다를 경우 변경없이 반환
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

  // 변경된 할 일 목록 반환
  return changeTodos;
}

function deleteTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  const changeTodos = todos.filter(todo => todo.id !== id);

  return changeTodos;
}

//# 함수 사용 예시
let todos: ITodoItem[] = [];

todos = addTodo(todos, '타입스크립트 공부');
todos = addTodo(todos, '자바스크립트 공부');
todos = addTodo(todos, '자바 공부');
todos = addTodo(todos, '파이썬 공부');

console.log(todos);

todos = completedTodo(todos, 1);
todos = completedTodo(todos, 3);
todos = completedTodo(todos, 4);
console.log(todos);

todos = completedTodo(todos, 1);
console.log(todos);

todos = deleteTodo(todos, 1);
todos = deleteTodo(todos, 4);
todos = addTodo(todos, 'HTML/CSS 공부');
console.log(todos);

// [
//   { id: 2, task: '자바스크립트 공부', completed: false },
//   { id: 3, task: '자바 공부', completed: true },
//   { id: 4, task: 'HTML/CSS 공부', completed: false }
// ]