import React from 'react'
import { useLocation } from 'react-router-dom'

function About() {
  const location = useLocation();

  // state 값은 Home.tsx의 클릭 이벤트 핸들러에만 적용되는 값
  const state = location.state as {
    from?: string;
    message?: string;
  }

  return (
    <div>
      <h3>소개 페이지</h3>
      <p>현재 경로: {location.pathname}</p>
      
      {state ? (
        <>
          <p>{state.from} / {state.message}</p>
        </>
      ) : (
        <p>전달된 데이터가 없습니다.</p>
      )}
    </div>
  )
}

export default About