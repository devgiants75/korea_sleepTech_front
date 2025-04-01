import React from "react";
import UseState01 from "./a_useState/UseState01";
import UseState02 from "./a_useState/UseState02";
import UseState03 from "./a_useState/UseState03";

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
      <UseState01 /> <hr />
      <UseState02 /> <hr />
      <UseState03 /> <hr />
    </div>
  );
}

export default Index;
