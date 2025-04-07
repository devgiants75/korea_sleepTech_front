import React from "react";
import A_Hook from "./A_Hook";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

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

      <h2 style={h2Style}>리액트 라우터 돔</h2>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
        / 로 시작하지 않는 path 경로: 상대 경로
          >> /review/about 경로로 동작
          >> App.tsx에서 /*로 라우팅을 하위 컴포넌트에게 위임
        */}
        <Route path="about" element={<About />} />
        <Route path="profile/:username" element={<Profile />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>

  );
}

export default Index;
