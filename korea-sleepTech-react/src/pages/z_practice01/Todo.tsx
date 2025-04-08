/** @jsxImportSource @emotion/react */
import React, { useMemo, useRef, useState } from 'react';
import * as s from './style';

/*
! 할 일 목록 만들기
: REACT(TS) Hooks(useState, useRef, useCallback, useMemo)
  + Emotion + Event Handler

! 기능 정리
  1) 할 일(TodoItem)에 대한 CRUD
  2) 사용자로부터 클릭 이벤트를 받아 할 일 목록을 필터링
    >> 모든 할 일, 완료되지 않은 할 일, 완료된 할 일
*/

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

type FilterType = "all" | "active" | "completed";

function Todo() {
  //# Hooks #//
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const nextIdRef = useRef<number>(1);

  //# Event Handler #//
  const handleKeyPrass = () => {

  }

  //# Function #//
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter(todo => !todo.completed);
      case "completed":
        return todos.filter(todo => todo.completed);
    }

  }, [todos, filter]); 
  // 전체 배열의 변화가 일어나거나 필터링할 타입의 변화가 아닌 경우
  // , 다시 필터링 계산하지 않고 기존의 데이터를 출력(반환)
  
  return (
    <div>
      <h1>리액트 Todo 예제</h1>
      <hr />

      <div>
        <h2>My Todo List</h2>
        <input type="text" placeholder='Add a new task' onKeyDown={handleKeyPrass} />
        <div>
          <button>All(모든)</button>
          <button>Active(완료 전)</button>
          <button>Completed(완료 후)</button>
        </div>
        <ul>

        </ul>
      </div>
    </div>
  )
}

export default Todo