import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import A from './A'
import B from './B'

// cf) c_router > a_react_Router_dom > Router01.tsx

/*
! react-router-dom
: React 앱에서 라우팅(페이지 이동)을 처리하는 데 사용되는 '라이브러리'
- 단일 페이지 애플리케이션(SPA)에서 URL 경로에 따라 다른 컴포넌트를 렌더링 할 수 있도록 하는 기능

? 설치 명령어
: npm install react-router-dom

! 주요 기능
1) BrowserRouter
  : 브라우저의 주소(URL)를 관리해주는 라우터의 부모 컴포넌트 (필수)
  - 주로 main.tsx에 명시 (App.tsx 컴포넌트를 감싸는 컴포넌트)

2) Routes
  : 여러 개의 Router를 감싸는 컨테이너
  - 하나의 Routes 내부의 Route는 서로 다른 특정 경로를 가짐

3) Route
  : 특정 경로(path)에 컴포넌트(element)를 연결

4) Link
  : 페이지 이동을 위한 React 전용 하이퍼링크(a 태그와 유사)
  - 새로고침 없이 이동

5) useNavigate
  : 자바스크립트 코드에서 페이지를 이동할 수 있도록 하는 Hook

6) useParams
  : URL 경로에서 파라미터를 가져오는 Hook

7) useLocation
  : 현재 위치 객체를 반환하는 Hook

8) useSearchParams
  : URL 쿼리스트링을 읽고 조작할 수 있는 Hook
*/

//! Link 컴포넌트 VS a 태그
// : 페이지를 새로 불러오지 않고 애플리케이션의 상태를 유지시킨 상태에서
//   , 페이지의 주소만 변경
// - to 속성(필수)
//   : 이동하고자 하는 URL을 문자열로 전달

// cf) a 태그
// : 페이지 전환 시 전체 페이지를 새로고침
//   , 애플리케이션이 가지고 있는 상태를 모두 초기화

function Router01() {
  return (
    <div>
      <p>Link 컴포넌트: 다른 URL로 이동시켜주는 컴포넌트</p>
      <Link to="/basic">기초 문법으로 이동</Link>
      <br />
      <Link to="/hooks">Hooks 문법으로 이동</Link>

      {/* 
        Router 내부 컴포넌트들의 to 속성에 
        1) /로 시작하는 경우: 메인 Route 경로에서 시작
          >> http://localhost:5173/

        2) / 없이 곧바로 경로가 시작되는 경우: 현재 컴포넌트를 기준으로 경로가 시작
          >> http://localhost:5173/router/
      */}
    </div>
  )
}

export default Router01