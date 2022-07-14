import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
            <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years of Experience</small>
            </article>

            <article className="about__card">
            <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>200+ Clients Worldwide</small>
            </article>

            <article className="about__card">
            <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
            
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore commodi mollitia officia praesentium ipsam! Nemo quas eaque aut quis itaque!</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
