import { Route, Routes } from 'react-router-dom'
import './App.css'

//# 컴포넌트 import #//
import NaviBar from './components/NaviBar';

//? cf) index 파일명 - 하나의 폴더 내에서 한 번만 사용 가능!
//  >> index.tsx 파일은 해당 파일이 포함된 폴더의 메인 파일로 인식!
//  >> import 시 폴더명 만으로 가져오기 가능!
import Basic from '@/pages/a_basic/index'; // '@/pages/a_basic/index.tsx'와 동일
import Hooks from '@/pages/b_hooks';
import Router from '@/pages/c_router';
import RouterPractice from '@/pages/d_router_practice';
import Review from '@/pages/e_review';
import Http from '@/pages/f_http';
import GlobalState from '@/pages/g_global_state';
import Style from '@/pages/h_style';

//# REACT(TS) + Axios + localStorage 게시글 앱
import PostApp from '@/pages/f_http/post-app/Main';
import Todo from './pages/z_practice01/Todo';

//& 기본 Vite React 앱의 경로
// : http://localhost:5173
function App() {
  return (
    <>
      <h1>Korea SleepTech React</h1>
      <NaviBar />

      {/* Routes 태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 단일 태그 사용 권장! */}
        {/* 
          path경로가 기본 앱 경로 뒤에 작성
          http://localhost:5173/basic
        */}
        <Route path='/basic' element={<Basic />} />
        <Route path='/hooks' element={<Hooks />} />

        {/* 
          중첩 라우팅
          : 해당 컴포넌트의 경로 내부에서 라우트 경로에 따라 페이지 전환이 일어남을 명시

          path='/해당컴포넌트기본경로/*'
        */}
        <Route path='/router/*' element={<Router />} />
        <Route path='/router-practice/*' element={<RouterPractice />} />
        <Route path='/review/*' element={<Review />} />
        <Route path='/http' element={<Http />} />
        <Route path='/global-state' element={<GlobalState />} />
        <Route path='/post-app' element={<PostApp />} />
        <Route path='/style' element={<Style />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </>
  )
}

export default App

//! React Router Dom
// : React에서 페이지 이동(라우팅)을 가능하게 해주는 라이브러리
// - SPA인 React가 페이지 새로고침 없이 하나의 페이지에도 화면이 렌더링
//   >> 이때 주소(URL)에 따라 다른 컴포넌트를 보여주고 싶을 때 사용

//? 'npm 명령어를 사용한 라이브러리 설치 시'! 주의점
// 반드시!!!!! node_modules가 위치하는 최상위 폴더(korea-sleepTech-react)에서 설치

// npm install react-router-dom
// npm install --save-dev @types/react-router-dom

//? 주요 기능
// <BrowserRouter>
// : 라우터를 감싸는 부모 컴포넌트 (필수!!)
// <Routes>
// : 여러 개의 라우트들을 묶는 역할
// <Route>
// : 경로 path에 따라 어떤 컴포넌트를 보여줄지 정의
// <Link>
// : 페이지를 새로고침 없이 이동하는 링크

// useNavigate(): 페이지 이동(뒤로가기, 앞으로 가기 등) Hook
// useParams(): URL 파라미터값을 가져오는 Hook