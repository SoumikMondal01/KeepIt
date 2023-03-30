import React from 'react'
import logo from './Images/logo.png'
import './CSS/Header.css'

const Header = () => {
  return (
    <div className='Header'>
      <div className="left">
      <img src={logo} alt="" height='80px' width='57px'/>
      <h2>KeepIt</h2>
      </div>
        <h2>SOUMIK MONDAL</h2>
    </div>
  )
}

export default Header;