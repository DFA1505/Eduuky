import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={Logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
