import React from 'react'
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

  return (
    <div>
      <p>UseNavigate 페이지</p>
      <button onClick={goToHomePage}>Home페이지로 이동</button>
    </div>
  )
}

export default UseNavigate