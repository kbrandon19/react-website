import React from 'react'
import {FaGithub, FaLinkedin, FaDribbble} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="https://www.github.com" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.dribbble.com" target="_blank" rel="noreferrer"><FaDribbble/></a>
        
    </div>
  )
}

export default HeaderSocials