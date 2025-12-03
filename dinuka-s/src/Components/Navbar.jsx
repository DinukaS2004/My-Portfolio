import React from 'react'
import logo from '../assets/mylogo-removebg-preview.png'
import { FaGithub, FaInstagram, FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaSquareTwitter } from 'react-icons/fa6'
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flexe-shrink-0 items-center'>
            <a href="/" aria-label="Home">
            <img src={logo} className='mx-2 mt-1.5'   width={70} height={43} alt='logo'/>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/dinukas" 
          target="_blank"
          rel = "noreferrer"
          aria-label = "LinkedIn">
            <FaLinkedin />
          </a>

          

          <a href="https://www.linkedin.com/in/dinukas" 
          target="_blank"
          rel = "noreferrer"
          aria-label = "Instagram">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/dinukas" 
          target="_blank"
          rel = "noreferrer"
          aria-label = "LinkedIn">
            <FaInstagram/>
          </a>

          <a href="https://www.linkedin.com/in/dinukas" 
          target="_blank"
          rel = "noreferrer"
          aria-label = "LinkedIn">
            <FaSquareTwitter />
          </a>

        </div>
    </nav>
  )
}

export default Navbar