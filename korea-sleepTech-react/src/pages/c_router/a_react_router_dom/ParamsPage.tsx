import React from 'react'
import { useParams } from 'react-router-dom';

function ParamsPage() {
  // 경로의 동적변수(:동적변수) 값을 추출
  const { id } = useParams();

  return (
    <div>
      <h3>Params Page</h3>
      <p>URL에서 받은 파라미터 ID: <strong>{id}</strong></p>
    </div>
  )
}

export default ParamsPage