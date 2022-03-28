import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

    <div className="container services__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>

        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Plan and implement new designs.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Optimize existing user interface designs.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Test for intuitivity and experience.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Combine creativity with an awareness of the design elements.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Conduct an ongoing user research.</p>
          </li>
        </ul>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Front-end Development</h3>

        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Responsive design.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Ecommerce functionality.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Collect website assets.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Conduct quality assurance testing.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Create beta site.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>HTML and CSS Responsive Web Design.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>React JS Development.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Javascript Development.</p>
          </li>
        </ul>
      </article>

      <article className="service">
        <div className="service__head">
          <h3>Back-end Development</h3>

        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Create, Retreive, Update, Delete .</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Creating database schemas that represent and support business processes.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>object oriented PHP programming.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>SQL/NoSQL databases and their declarative query languages.</p>
          </li>
        </ul>
      </article>

      

    </div> 
    </section>
  )
}

export default Services