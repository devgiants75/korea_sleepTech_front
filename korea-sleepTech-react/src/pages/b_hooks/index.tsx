import React from "react";
import UseState01 from "./a_useState/UseState01";
import UseState02 from "./a_useState/UseState02";
import UseState03 from "./a_useState/UseState03";
import UseState04 from "./a_useState/UseState04";
import UseState05 from "./a_useState/UseState05";
import UseState06 from "./a_useState/UseState06";
import Practice from "./a_useState/Practice";
import UseRef01 from "./b_useRef/UseRef01";
import UseRef02 from "./b_useRef/UseRef02";

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

      <h2 style={h2Style}>리액트 Hooks - useRef</h2>
      <UseRef01 />
      <UseRef02 />

      <h2 style={h2Style}>리액트 Hooks - useState</h2>
      <UseState01 /> <hr />
      <UseState02 /> <hr />
      <UseState03 /> <hr />
      <UseState04 /> <hr />
      <UseState05 /> <hr />
      <UseState06 /> <hr />
      <Practice />

    </div>
  );
}

export default Index;
