import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/review/about', {
      state: {
        from: '홈페이지',
        message: '환영합니다! 이것은 홈페이지로 부터 전달된 메시지입니다.',
      }
    });
  }

  return (
    <div>
      <h3>홈 페이지</h3>
      <button onClick={goToAbout}>소개 페이지로 이동</button>
    </div>
  )
}

export default Home