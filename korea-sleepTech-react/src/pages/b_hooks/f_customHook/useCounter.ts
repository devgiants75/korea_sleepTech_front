// useCounter.ts

import { useState } from "react";

//! 커스텀 훅
export function useCounter<T extends number>(initialValue: T) {
  // 초기값을 매개변수로 받아
  // , 카운터를 증가, 감소, 초기화하는 함수와 현재값을 반환
  const [count, setCount] = useState<T>(initialValue);

  const increment = () => setCount(prevCount => (prevCount + 1) as T);
  const decrement = () => setCount(prevCount => (prevCount - 1) as T);
  const reset = () => setCount(initialValue);

  // 객체 전달
  // : 속성 1, 메서드 3
  return { count, increment, decrement, reset };
}