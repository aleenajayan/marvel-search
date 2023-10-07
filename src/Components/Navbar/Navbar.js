import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='header'>
      <img src="./Images/logo.png" alt="logo" className="logo"/>
        <ul className="list">
            <li><a href="#search">Home</a></li>
            <li><a href="#heroes">Heroes</a></li>
        </ul>
    </div>
  )
}

export default Navbar
