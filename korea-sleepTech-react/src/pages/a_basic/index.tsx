// index.tsx
import React from 'react'
import B_React_Counter from './B_React_Counter';

function Index() {
  return (
    <div>
      <h1 style={{
        backgroundColor: 'black',
        color: 'pink'
      }}>
        리액트 기본 문법
      </h1>

      <h2>리액트 VS 타입스크립트(카운터 예제)</h2>
      <B_React_Counter />
    </div>
  )
}

export default Index; // 기본 내보내기 - 사용하면서 컴포넌트명 변경 가능