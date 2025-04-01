import React, { useState } from "react";

//! Todo 관리 시스템

/*
1. 할 일 내용 (문자열)
2. 할 일 완료 상태 (논리값)
3. 시간 기록 (Date 날짜 타입)

- 할 일 추가, 조회, 수정, 삭제 CRUD
*/

interface ITodo {
  description: string;
  completed: boolean;
  timestamp: Date;
}

function Practice() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [task, setTask] = useState<string>('');

  const addTodo = () => {
    if (task.trim() !== '') {
      const newTodo: ITodo = {
        description: task,
        completed: false,
        timestamp: new Date(),
      };

      // 전체 할 일 배열 요소를 가져와 추가 할 일을 마지막 요소로 추가
      // : 배열의 불변성 방지를 위해 새로운 배열에 요소를 깊은 복사
      setTodos([...todos, newTodo]);

      setTask(''); // 입력 필드 초기화
    }
  }

  const toggleTodo = (index: number) => {
    const newTodos = todos.map((todo, idx) => 
      idx === index 
      ? { ...todo, completed: !todo.completed} 
      : todo
    );

    setTodos(newTodos); // 새로운 배열 주소를 전달 >> 상태 변경 감지
  }

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
  }

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "400px",
        margin: "20px auto",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      <h3>할 일 목록 앱</h3>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="할 일을 입력하세요"
        style={{
          padding: '10px',
          fontSize: '16px',
          borderRadius: '6px',
          border: '1px solid #ccc'
        }}
      />
      <button onClick={addTodo} style={{
        padding: '10px 15px',
        fontSize: '14px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '6px'
      }}>할 일 추가</button>

      <hr />
      <ul>
        {todos.map((todo, index) => (
          // ReactNode로 반환: JSX에서 ReactNode 작성 시 ()소괄호 내에 작성
          <li key={index}>
            {todo.description}
            (작성 시간: {todo.timestamp.toLocaleTimeString()})
            <button onClick={() => toggleTodo(index)}>
              {todo.completed ? '완료 취소' : '할 일 완료'}
            </button>
            <button onClick={() => deleteTodo(index)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Practice;
