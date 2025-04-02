import React from 'react'
import { Todo } from './TodoAppLocalStorage'
import TodoItem from './TodoItem';

//! 목록 반복 렌더링 컴포넌트
// : props.todos를 받아 반복 렌더링
// : TodoItem을 각 항목으로 생성

//! 부모 컴포넌트(TodoAppLocalStorage)로 부터 전달받는 props 데이터 정의
interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList