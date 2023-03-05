import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function Header() {
  return (
    <div className='header'>
        <Link className='el' to={"/"}>Home</Link>
        <Link className='el' to={"/Admin"}>Admin</Link>
    </div>
  )
}

export default Header