import React from 'react'
import {FaGithub, FaLinkedin, FaDribbble} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com" target="_blank"><FaLinkedin/></a>
        <a href="https://www.github.com" target="_blank"><FaGithub/></a>
        <a href="https://www.dribbble.com" target="_blank"><FaDribbble/></a>
        
    </div>
  )
}

export default HeaderSocials