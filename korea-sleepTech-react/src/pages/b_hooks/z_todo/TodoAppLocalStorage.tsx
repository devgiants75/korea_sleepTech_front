import React, { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";

//# 최상위 컴포넌트
// : 로컬 스토리지에서 데이터를 불러오고
//   , 상태 관리
//   , 할 일을 추가/삭제/토글하는 핵심 로직 구현

//! 할 일(Todo) 타입 정의
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

//! 로컬 스토리지의 데이터를 불러오는 함수
const loadTodosFromLocalStorage = (): Todo[] => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

function TodoAppLocalStorage() {
  const [todos, setTodos] = useState<Todo[]>(loadTodosFromLocalStorage);
  const [inputValue, setInputValue] = useState<string>("");
  const nextId = useRef<number>(
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
  );

  //? 할 일 추가 함수
  const addTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: nextId.current,
      text: inputValue.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);

    nextId.current += 1;
    setInputValue("");
  };

  //? 할 일 토글 함수 (완료 여부)
  const toggleTodoCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //? 할 일 삭제 함수
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //! todos 배열이 변경될 때만 로컬 스토리지에 새로운 데이터를 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? addTodo() : null)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodoCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoAppLocalStorage;
