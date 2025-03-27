// b_answer_todo02.ts
export const tmp = "";

// Todo 항목의 인터페이스 정의
// 각 Todo 항목은 id, task, completed 속성을 가짐
interface ITodoItem {
  id: number;
  task: string;
  completed: boolean;
}

// 새로운 Todo 항목을 추가하는 함수
// 주어진 task를 가지고 새로운 Todo 항목을 생성한 뒤, 기존 목록에 추가하여 반환
function addTodo(todos: ITodoItem[], task: string): ITodoItem[] {
  const newTodo: ITodoItem = {
    id: Math.max(0, ...todos.map((t) => t.id)) + 1, // id는 기존 id들 중 가장 큰 값 + 1로 설정
    task: task,
    completed: false,
  };
  return [...todos, newTodo]; // 새로운 todo를 추가한 배열을 반환
}

// 특정 id를 가진 Todo 항목을 완료 상태로 변경하는 함수
function completeTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: true } : todo
  ); // id가 일치하면 completed를 true로, 그렇지 않으면 그대로 반환
}

// 특정 id를 가진 Todo 항목을 삭제하는 함수
function deleteTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  return todos.filter((todo) => todo.id !== id); // id가 일치하지 않는 항목만 남긴 배열을 반환
}

// 특정 id를 가진 Todo 항목의 task를 편집하는 함수
function editTodo(
  todos: ITodoItem[],
  id: number,
  newTask: string
): ITodoItem[] {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, task: newTask } : todo
  ); // id가 일치하면 task를 새 값으로, 그렇지 않으면 그대로 반환
}

// 완료된 Todo 항목을 모두 삭제하는 함수
function clearCompleted(todos: ITodoItem[]): ITodoItem[] {
  return todos.filter((todo) => !todo.completed); // completed가 false인 항목만 남긴 배열을 반환
}

// 모든 Todo 항목을 조회하는 함수
function getAllTodos(todos: ITodoItem[]): ITodoItem[] {
  return todos; // todos 배열을 그대로 반환
}

// 특정 상태(completed)에 따라 Todo 항목을 필터링하는 함수
function filterTodos(todos: ITodoItem[], completed: boolean): ITodoItem[] {
  return todos.filter((todo) => todo.completed === completed); // completed 상태가 일치하는 항목들만 반환
}

// 특정 id를 가진 Todo 항목의 completed 상태를 토글하는 함수
function toggleTodo(todos: ITodoItem[], id: number): ITodoItem[] {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ); // id가 일치하면 completed를 토글, 그렇지 않으면 그대로 반환
}

// 모든 Todo 항목의 completed 상태를 일괄적으로 설정하는 함수
function setAllTodosCompletion(
  todos: ITodoItem[],
  completed: boolean
): ITodoItem[] {
  return todos.map((todo) => ({ ...todo, completed })); // 모든 항목의 completed를 주어진 값으로 설정한 배열을 반환
}

// 함수 사용 예시
let todos: ITodoItem[] = [];
todos = addTodo(todos, "타입스크립트 복습하기");
todos = addTodo(todos, "자바스크립트 복습하기");
todos = addTodo(todos, "HTML/CSS 복습하기");
console.log("Initial Todos:", getAllTodos(todos)); // 초기 Todo 목록 출력

todos = completeTodo(todos, 1);
todos = completeTodo(todos, 2);
console.log("Completed Todos:", getAllTodos(todos)); // Todo 항목 두 개를 완료한 후 목록 출력

todos = editTodo(todos, 2, "JavaScript 심화 학습");
console.log("Edited Todos:", getAllTodos(todos)); // 두 번째 항목의 task를 수정한 후 목록 출력

todos = deleteTodo(todos, 1);
console.log("After Deleting Todo with ID 1:", getAllTodos(todos)); // 첫 번째 항목 삭제 후 목록 출력

todos = clearCompleted(todos);
console.log("After Clearing Completed Todos:", getAllTodos(todos)); // 완료된 항목 삭제 후 목록 출력

todos = filterTodos(todos, false);
console.log("Filtered Incomplete Todos:", todos); // 완료되지 않은 항목들만 필터링하여 출력

todos = toggleTodo(todos, 2);
console.log("After Toggling Todo with ID 2:", getAllTodos(todos)); // 두 번째 항목의 완료 상태를 토글 후 목록 출력

todos = setAllTodosCompletion(todos, true);
console.log("After Setting All Todos to Completed:", getAllTodos(todos)); // 모든 항목을 완료 상태로 변경 후 목록 출력
