import React from "react";
import Router01 from "./a_react_router_dom/Router01";
import Router02 from "./a_react_router_dom/Router02";
import { Route, Routes } from "react-router-dom";
import A from "./a_react_router_dom/A";
import B from "./a_react_router_dom/B";
import { Link } from "react-router-dom";
import UseParams from "./a_react_router_dom/UseParams";
import UseNavigate from "./a_react_router_dom/UseNavigate";

const h2Style = {
  backgroundColor: "black",
  color: "orange",
};

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "pink" }}>
        === 리액트 Router ===
      </h1>

      <h2 style={h2Style}>리액트 Router</h2>
      <Router01 />
      <Router02 />

      {/* 
        중첩된 라우팅 설정
        : 해당 컴포넌트의 현재 경로를 기준으로 '추가 경로 지정' 
      */}
      <ul>
        <li>
          {/* /경로값: 프로젝트의 진입점 경로를 기준 */}
          <Link to="/a">a</Link>
        </li>
        <li>
          {/* 경로값만: 현재 컴포넌트의 경로를 기준 */}
          <Link to="b">b</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
        {/* 
        메인경로/router/id값 
        >> useParams 훅을 통해 경로의 파라미터(변수) 값을 추출
        */}
        <Route path="/:id" element={<UseParams />} />
      </Routes>

      <h2 style={h2Style}>useNavigate</h2>
      <UseNavigate />
    </div>
  );
}

export default Index;
