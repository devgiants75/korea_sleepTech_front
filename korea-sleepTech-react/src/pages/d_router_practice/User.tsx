import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//! === useParams 사용 예제 ===
function User() {
  const { id }= useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id || isNaN(Number(id))) {
    return <div>❌유효하지 않은 ID입니다. 숫자만 허용됩니다.❌</div>
  }

  return (
    <div>
      <h2>유저 페이지 - ID: {id}</h2>
      <button onClick={() => navigate('/router-practice')}>홈으로</button>
    </div>
  )
}

export default User