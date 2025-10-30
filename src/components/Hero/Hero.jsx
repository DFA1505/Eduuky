import React from 'react'
import './Hero.css'
import { FaArrowAltCircleRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure Better Enducation For A Better World</h1>
        <p>We're dedicated to making world-class education accessible to everyone. By leveraging innovative teaching methods and modern technology, we empower learners with the essential skills and deep understanding required to solve real-world problems and create a more prosperous and equitable society.</p>
        <button className='btn'>Explore More<FaArrowAltCircleRight className='btn-icon'/></button>
      </div>
    </div>
  )
}

export default Hero
