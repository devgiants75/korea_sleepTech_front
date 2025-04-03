import React from 'react'
import { useLocation } from 'react-router-dom';

function A() {
  //! useLocation() 
  // : 사용자가 현재 URL 경로에 대한 정보를 제공하는 훅
  // - useNavigate에서 데이터를 전달
  const location = useLocation();

  // location.state가 비워져 있지 않다면(false가 아니라면) 해당 값 반환
  // , 비워진 경우 빈 객체{} 반환
  const { userId } = location.state || {}; // { userId: 12345 }

  return (
    <div style={{
      width: '100px',
      height: '100px'
    }}>
      User Id: {userId}
    </div>
  )
}

export default A