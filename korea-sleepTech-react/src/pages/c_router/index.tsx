import React from 'react'
import Router01 from './a_react_router_dom/Router01';
import Router02 from './a_react_router_dom/Router02';

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
    </div>
  )
}

export default Index