import React, { useReducer } from "react";
import { reducer } from "./UseReducer01";

type CountState = {
  count: number;
  step: number; // 증가, 감소 단위
};

type CountAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

const initialState: CountState = {
  count: 0,
  step: 2,
};

// 리듀서 함수: 일반 함수
function reducerStep(state: CountState, action: CountAction): CountState {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function UseReducer02() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [stepState, stepDispatch] = useReducer(reducerStep, initialState);

  return (
    <div style={{ backgroundColor: "pink" }}>
      <h5>리듀서 함수 재사용</h5>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>증가</button>
      <button onClick={() => dispatch({ type: "decrement" })}>감소</button>

      <h5>카운터(2씩 증가/감소 & 초기화)</h5>
      <p>StepCount: {stepState.count}</p>
      <button onClick={() => stepDispatch({ type: "increment" })}>
        +2 증가
      </button>
      <button onClick={() => stepDispatch({ type: "decrement" })}>
        -2 감소
      </button>
      <button onClick={() => stepDispatch({ type: "reset" })}>초기화</button>
    </div>
  );
}

export default UseReducer02;
