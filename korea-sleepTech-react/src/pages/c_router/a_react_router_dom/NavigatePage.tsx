import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavigatePage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  }

  const handleGoRouterHome = () => {
    // 절대 경로
    navigate('/router');
  }

  const handleGoRelativeRouter = () => {
    // 상대 경로
    // http://localhost:5173/router/navigate/params/123
    navigate('params/123');
  }

  return (
    <div>
      <h3>useNavigate</h3>
      <button onClick={handleGoBack}>뒤로가기</button>
      <button onClick={handleGoRouterHome}>Router Home으로 이동(절대경로)</button>
      <button onClick={handleGoRelativeRouter}>Router Home으로 이동(절대경로)</button>
    </div>
  )
}

export default NavigatePage