import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {
  const { username } = useParams<{ username: string }>();

  return (
    <div>
      <h3>{username}님의 프로필</h3>
    </div>
  )
}

export default Profile