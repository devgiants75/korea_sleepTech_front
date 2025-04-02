import React, { useState } from "react";

//! === React.memo() ===
// : 함수형 컴포넌트의 렌더링 결과를 메모리에 저장
// - props가 바뀌지 않으면 재사용하는 고차 컴포넌트

/*
? 기본 구조
React.memo(Component)

>> rfce(react functional component export)
*/

//# 자식 컴포넌트
const ChildComponet = React.memo(({ count }: { count: number }) => {
  console.log("자식 컴포넌트 렌더링");
  return <div>Count: {count}</div>;
});

//# 부모 컴포넌트
function ReactMemo() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  return (
    <div>
      <ChildComponet count={count} />
      <button onClick={() => setCount(count + 1)}>증가</button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

// 해당 컴포넌트의 props가 변경되지 않으면 재렌더링 X
// >> 부모 컴포넌트에서 상태가 변경될 경우 >> 자식도 같이 렌더링
//    +) 자식 props가 바뀔 때만 렌더링!
export default React.memo(ReactMemo);
