import { Route, Routes } from 'react-router-dom'
import './App.css'

//# 컴포넌트 import #//

//? cf) index 파일명 - 하나의 폴더 내에서 한 번만 사용 가능!
//  >> index.tsx 파일은 해당 파일이 포함된 폴더의 메인 파일로 인식!
//  >> import 시 폴더명 만으로 가져오기 가능!
import Basic from '@/pages/a_basic'; // '@/pages/a_basic/index.tsx'와 동일

//& 기본 Vite React 앱의 경로
// : http://localhost:5173
function App() {
  return (
    <>
      <h1>Korea SleepTech React</h1>
      {/* Routes 태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 단일 태그 사용 권장! */}
        {/* 
          path경로가 기본 앱 경로 뒤에 작성
          http://localhost:5173/basic
        */}
        <Route path='/basic' element={<Basic />} />
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