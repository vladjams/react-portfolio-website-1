import React from 'react'
import './about.css'
import ME from '../../assets/65581463_333371957595443_644667706297024512_n.jpg'
import {FaAward} from 'react-icons/fa'
import {RiCodeSSlashLine} from 'react-icons/ri'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>500+ hours of on the job training</small>
            </article>
            <article className='about__card'>
              <RiCodeSSlashLine className='about__icon'/>
              <h5>Front-end experience</h5>
              <small>2+ years of front-end training and practicing</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>
          <p>Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies. Aspiring  to combine board broad background with strong technical skills to excel as Front-End Developer</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>

    </section>
  )
}

export default about