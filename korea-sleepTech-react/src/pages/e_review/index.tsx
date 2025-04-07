import React from "react";
import A_Hook from "./A_Hook";

const h2Style = {
  backgroundColor: "black",
  color: "orange",
};

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "pink" }}>
        === 리액트 리뷰 (함수형 컴포넌트 / 라우터) ===
      </h1>

      <h2 style={h2Style}>함수형 컴포넌트</h2>
      <A_Hook />
    </div>

  );
}

export default Index;
