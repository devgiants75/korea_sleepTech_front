import React, { useReducer, useState } from 'react'

//! === useReducer ===

//! React 컴포넌트의 상태 관리 (useState VS useReducer)

// 1) useState
// : 리액트에서 가장 기본적인 상태 관리 Hook
// - 간단한 상태 값 변경 시 사용
// - '컴포넌트 내부에서 직접 상태 처리'
// const [state, setState] = useState<stateType>(initialValue);

// 2) useReducer
// : 복잡한 상태 로직을 관리하는 Hook
// - '상태 업데이트 로직'을 외부에서 선언 가능 (재사용 용이)
//? const [state, dispatch] = useReducer(reducer, initialValue);

// - state: 현재 상태 값 (관리되는 데이터)
// - dispatch: '액션을 발생시켜' 상태를 업데이트 하는 함수
//   >> 해당 함수에 액션을 전달할 경우, '리듀서 함수'가 호출되어 새로운 상태를 계산

// - reducer: 리듀서 함수(상태를 어떻게 변경할지 정의한 함수)
//   >> useReducer에 인자로 전달되는 함수
//   >> 상태 변경 로직을 포함(switch, case)하고 
//      , 이전 상태와 액션 객체를 인자로 받아 새로운 상태를 반환'

// - initialValue: 리듀서의 초기 상태 정의 (상태의 초기값)

//! 리듀서 함수(상태 변경 로직을 포함하는 함수)
// function reducer(state, action) {
//   switch(action.type) {
//     case: '어떤동작':
//       return 새로운 상태;
//     case: '':
//       return 새로운 상태;
//     default:
//       return state;
//   }
// }

export type CountState = {
  count: number
}

export type CountAction = { type: 'increment' } | { type: 'decrement' };

// 리듀서 함수: 일반 함수
export function reducer(state: CountState, action: CountAction): CountState {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
  }
}

export default function UseReducer01() {
  const [count, setCount] = useState<number>(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // >> state(상태) 타입: 객체 타입

  const handleIncrement = () => {
    setCount(prevCount =>  prevCount + 1);
  }

  const handleDecrement = () => {
    setCount(prevCount =>  prevCount - 1);
  }

  return (
    <div>
      <h5>useState를 사용한 상태관리</h5>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>증가</button>
      <button onClick={handleDecrement}>감소</button>

      <h5>useReducer를 사용한 상태관리</h5>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>증가</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>감소</button>
    </div>
  )
}
