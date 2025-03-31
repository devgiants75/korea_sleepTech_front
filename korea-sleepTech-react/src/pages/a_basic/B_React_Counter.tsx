// B_React_Counter.tsx

//# 확장 플러그인
// React Snippets 설치
// : 리액트에서 사용할 다양한 코드 집합을 제공

// 1) imr: import React form 'react'
// >> 리액트 가져오기
//? import React from 'react'

// 2) nfn: const functionName = (params) => {}
// >> 명명된 함수
//? const first = (second) => { third }

//! rfce 함수형 컴포넌트 구조
import React, { useState } from 'react';
//? React Functional Component Export Default
// : 해당 모듈 사용 시 import 명칭 변경 from '';

function B_React_Counter() {
  // rfc(e)로 생성되는 컴포넌트는 파일명으로 함수명 지정

  //& 리액트와 일반 TS의 차이
  // 1) UI 컴포넌트가 클래스 또는 '함수' 형태로 작성
  // : 함수형 컴포넌트 사용 권장!

  // 2) 컴포넌트를 기반으로 UI와 상태 관리를 구현

  //? 함수형 컴포넌트를 사용하는 리액트의 기능: hook
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  //? jsx(tsx) 에서는 return문을 사용하여 HTML 영역을 반환
  return (
    <div>
      <p>VS 타입스크립트(카운터 예제)</p>
      <p>Count: {count}</p>
      {/* 
        ? JSX(TSX)에서는 속성 지정 시 lowerCamelCase 사용
        - js(ts): onclick 속성
        - jsx(tsx): onClick 속성
      */}
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  )
}

export default B_React_Counter;

//! rfc 함수형 컴포넌트 구조
//? React Functional Component
// : 함수형 컴포넌트만 생성!
// - 해당 컴포넌트를 모듈로 사용할 경우 export를 추가
// import React from 'react'

// export default function B_React_Counter() {
//   return (
//     <div>B_React_Counter</div>
//   )
// }
