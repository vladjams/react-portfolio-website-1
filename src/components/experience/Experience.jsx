import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>

      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Front-end Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
          <BsPatchCheckFill class='experience__details-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill class='experience__details-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermidiate</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill class='experience__details-icon'/>
          <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Intermidiate</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill class='experience__details-icon'/>
          <div>
          <h4>Bootstrap</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill class='experience__details-icon'/>
          <div>
          <h4>react</h4>
          <small className='text-light'>Intermidiate</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill class='experience__details-icon'/>
          <div>
          <h4>react</h4>
          <small className='text-light'>Intermidiate</small>
          </div>
          </article>
        </div>

      </div>
      <div className="experience__backend">
      <h3>Back-end Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
          <BsPatchCheckFill class='experience__details-icon'/>
          <div>
          <h4>PHP</h4>
          <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
          <BsPatchCheckFill class='experience__details-icon'/>
          <div>
          <h4>MySQL</h4>
          <small className='text-light'>Intermidiate</small>
          </div>
          </article>
          
        </div>

      </div>

      </div>
    </section>
  )
}

export default Experience