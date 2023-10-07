import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='header'>
      <img src="./Images/logo.png" alt="logo" className="logo"/>
        <ul className="list">
            <li><a href="#heroes">Home</a></li>
            <li><a href="#heroes">Heroes</a></li>
            <li><a href="#movies">Movies</a></li>
            <li><a href="#series">Series</a></li>
        </ul>
    </div>
  )
}

export default Navbar
