import React from 'react'
import { useNavigate } from 'react-router-dom'

//! === useNavigate 사용 예제 ===
function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/router-practice/about');
  }
  return (
    <div>
      <h2>HOME 홈</h2>
      <button onClick={goToAbout}>About 소개 페이지로 이동</button>
    </div>
  )
}

export default Home