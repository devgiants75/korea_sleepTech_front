import React, { useCallback, useState } from "react";

//! === useCallback ===
// : React 함수형 컴포넌트 Hook
// : 특정 콜백함수가 의존성 배열에 명시된 값들이 변경되지 않는 한
//   , 동일한 함수 인스턴스를 유지하도록 해주는 훅
// >> 콜백함수를 메모이제이션(Memoization)
// >> 주로) 자식 컴포넌트에 함수 전달 시 사용

//? React 컴포넌트 리렌더링
// : 함수는 컴포넌트가 리렌더링(상태 변화 || props값 변경 등)될 때 마다 새로운 함수 인스턴스가 생성

// 해당 함수가 자식 컴포넌트의 props로 전달되는 경우
// : 부모의 리렌더링 마다 함수의 주소값이 변경되어 새로운 값으로 인식하고 자식 컴포넌트를 리렌더링

const myFunc = () => {
  console.log("함수 다시 생성!");
};

//? 컴포넌트 내에서만 Hook 사용 가능!
// >> 함수형 컴포넌트의 최상단에서만 호출 가능!

// const callbackMyFunc = useCallback(() => {
//   console.log('함수 다시 생성!');
// }, []); // 첫 번째 인자: 콜백함수, 두 번째 인자: 의존성 배열

// >> 배열 안의 값이 바뀔 때만 함수가 다시 생성!
//    : 그렇지 않으면 이전에 만든 함수를 재사용! (메모이제이션)

//# 자식 컴포넌트
const Button = ({ handleClick }: { handleClick: () => void}) => {
  // useCallback 사용 시 
  // : 자식 컴포넌트 내부의 clg은 리렌더링
  // - 부모로부터 전달 받는 함수의 인스턴스는 동일하게 유지
  console.log('버튼이 렌더링되었습니다.');
  return <button onClick={handleClick}>자식 버튼</button>
}

//# 부모 컴포넌트
function UseCallback() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  const handleCountClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  return (
    <div>
      <h5>useCallback</h5>
      <p>Count: {count}</p>
      <button onClick={handleCountClick}>부모 버튼</button>
      <Button handleClick={handleCountClick} />

      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default UseCallback;
