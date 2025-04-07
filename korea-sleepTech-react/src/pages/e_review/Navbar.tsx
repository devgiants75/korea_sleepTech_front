import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{
      padding: '10px',
      borderBottom: '1px solid gray'
    }}>
      <NavLink to='/review/' style={({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal'
      })} >
        홈
      </NavLink> {' '} | {' '}

      <NavLink to='/review/about' style={({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal'
      })} >
        소개
      </NavLink> {' '} | {' '}

      <NavLink to='/review/profile/lsa' style={({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal'
      })} >
        프로필
      </NavLink> {' '} | {' '}

      <NavLink to='/review/search?keyword=react' style={({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal'
      })} >
        검색
      </NavLink>
    </div>
  )
}

export default Navbar