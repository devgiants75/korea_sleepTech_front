import React from "react";
import UseState01 from "./a_useState/UseState01";

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
        === 리액트 Hooks ===
      </h1>

      <h2 style={h2Style}>리액트 Hooks - useState</h2>
      <UseState01 />
    </div>
  );
}

export default Index;
