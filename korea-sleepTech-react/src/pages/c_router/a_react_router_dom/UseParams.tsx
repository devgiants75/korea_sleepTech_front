import React from 'react'
import { useParams } from 'react-router-dom'

export default function UseParams() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      {id}의 값을 추출
    </div>
  )
}
