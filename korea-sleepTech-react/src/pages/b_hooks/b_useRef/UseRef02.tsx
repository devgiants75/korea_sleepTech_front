import React, { useRef, useState } from 'react'

//! useRef를 사용한 DOM 요소 참조
// : 컴포넌트가 재렌더링되어도 동일한 참조값을 유지
// - 특정 DOM 요소에 접근하고 조작

function UseRef02() {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(0);

  // HTML Element(요소)에 대한 기본값 null
  const inputRef = useRef<HTMLInputElement>(null);

  const increment = () => {
    setCount(prevCount => {
      prevCountRef.current = prevCount;
      return prevCount + 1;
    });
  }

  const handleButtonFocus = () => {
    // current값에 요소의 참조값이 담겨져 있음
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <p>현재 카운트: {count}</p>
      <p>이전 카운트: {prevCountRef.current}</p>
      <button onClick={increment}>증가</button>

      {/* 요소의 참조값은 ref에 등록 */}
      <hr />
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonFocus}>input에 포커스</button>
    </div>
  )
}

export default UseRef02