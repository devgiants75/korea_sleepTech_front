import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

//! useNavigate()
// : 사용자를 다른 페이지로 이동시킬 때 사용

// cf) Link 컴포넌트와의 차이
// : useNavigate()훅은 이벤트 핸들러나 비동기 작업 내에서의 특정 경로 이동이 가능

function UseNavigate() {
  //! useNavigate() 사용방법
  // 주로) navigate 변수명으로 호출
  //        >> 원하는 경로를 문자열 인수로 전달하여 이동
  const navigate = useNavigate();
  // navigate('이동하고자 하는 경로');

  // const exampleFunc = function() {
  //   console.log('안녕');
  // }

  // exampleFunc();

  const goToHomePage = () => {
    // 추가 기능

    navigate('/');
  }

  const goToPrevPage = () => {
    // 브라우저의 기록을 읽고 이전 경로로 이동
    navigate(-1);
  }

  const goToOtherPage = () => {
    //! useNaviaget 훅의 옵션
    // - state 옵션
    // : 네비게이션(경로)과 함께 상태 전달 가능
    // : useLocation() 훅을 통해 접근 가능 (A 컴포넌트)
    navigate('/router/a', { state: { userId: 12345 }});
  }

  const isAuthenticated = true; // authenticate: 인증

  const handleSignUp = () => {
    // 인증된 사용자만이 회원가입되고 홈화면으로 이동

    if (isAuthenticated) {
      navigate('/');
    }
  }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <p>UseNavigate 페이지</p>
      <button onClick={goToHomePage}>Home 페이지로 이동</button>
      <button onClick={goToPrevPage}>이전 페이지로 이동</button>
      <button onClick={goToOtherPage}>다른 페이지로 이동</button>

      <button onClick={handleSignUp}>회원가입</button>
    </div>
  )
}

export default UseNavigate