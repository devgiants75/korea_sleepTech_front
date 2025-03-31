// index.tsx
import React from "react";
import B_React_Counter from "./B_React_Counter";
// 기본 export 내보내기 - 모듈명 변경 가능!, {} 생략 사용
import C_Component from "./C_Component";
// 일반 export 내보내기 - 모듈명 변경 불가!, {} 중괄호로 감싸서 사용
import { Img } from "./C_Component";
import D_JSX from "./D_JSX";
import E_JSX from "./E_JSX";
import F_Props from "./F_Props";
import G_Props from "./G_Props";
import H_Rendering from "./H_Rendering";

const h2Style = {
  backgroundColor: "black",
  color: "orange",
};

function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "black",
          color: "pink",
        }}
      >
        === 리액트 기본 문법 ===
      </h1>

      <h2 style={h2Style}>1. 리액트 VS 타입스크립트(카운터 예제)</h2>
      <B_React_Counter />

      <h2 style={h2Style}>2. Component: 리액트를 구성하는 기본 구조</h2>
      <C_Component />
      {/* 컴포넌트: 재사용 가능한 UI의 집합 */}
      <Img />

      <h2 style={h2Style}>3 JSX(TSX): 리액트의 기본 문법</h2>
      <D_JSX />
      <E_JSX />

      <h2 style={h2Style}>4. Props: 리액트의 데이터 전달(부모/자식)</h2>
      <F_Props />
      <G_Props />

      <h2 style={h2Style}>5. Rendering: 조건부 렌더링</h2>
      <H_Rendering />
    </div>
  );
}

export default Index; // 기본 내보내기 - 사용하면서 컴포넌트명 변경 가능
