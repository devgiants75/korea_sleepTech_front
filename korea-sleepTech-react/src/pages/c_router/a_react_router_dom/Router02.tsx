import React from 'react'
import { Link } from 'react-router-dom'

function Router02() {
  return (
    <div>
      <Link to='/router/1' style={{
        backgroundColor: 'black',
        color: 'white'
      }}>1의 값을 가져오기</Link>
    </div>
  )
}

export default Router02