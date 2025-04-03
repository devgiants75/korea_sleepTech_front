import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import User from './User'
import Posts from './Posts'
import { Link } from 'react-router-dom'

// '/router-practice' 경로
function Index() {
  return (
    <div>
      <h2>React Router 실습</h2>
      <nav>
        <Link to='/router-practice'>홈</Link> | {" "}
        <Link to='/router-practice/about'>소개</Link> | {" "}
        <Link to='/router-practice/contact'>문의하기</Link> | {" "}
        <Link to='/router-practice/user/1'>1번 유저</Link> | {" "}
        <Link to='/router-practice/posts?userId=1'>1번 유저 게시글</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:id' element={<User />} />
        <Route path='posts' element={<Posts />} />
        <Route path='*' element={<div>❌페이지를 찾을 수 없습니다.❌</div>} />
      </Routes>
    </div>
  )
}

export default Index