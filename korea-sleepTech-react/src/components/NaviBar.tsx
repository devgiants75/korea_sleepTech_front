import React from 'react'
import { NavLink } from 'react-router-dom';

//! Link VS NavLink 컴포넌트
// : a 태그와 유사하게 동작
// - 새로고침하지 않고 SPA의 다른 경로로 이동
// - 해당 링크 클릭 시 이동할 경로값을 to 속성으로 지정 (필수)

// 1) Link
// : 가장 기본적인 페이지 전환 컴포넌트 (a 태그)

// 2) NavLink
// : Link + 현재 활성화된 페이지 경로에 대한 추가적인 스타일 또는 클래스명 적용 가능

function NaviBar() {
  const links = ['/', 'basic', 'hooks', 'router', 'router-practice', 'review', 'http', 'global-state'];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: '10px',
      padding: '10px 20px',
      border: '1px solid black',
      borderRadius: '5px'
    }}>
      {links.map(link => (
        <NavLink 
          to={link}
          key={link}
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'white' : 'black',
            backgroundColor: isActive ? 'red' : 'lightgray',
            margin: '5px',
            padding: '10px 20px',
            borderRadius: '5px'
          })}
        >
          {link === '/' ? 'HOME' : link.toUpperCase()}
        </NavLink>
      ))}
    </div>
  )
}

export default NaviBar