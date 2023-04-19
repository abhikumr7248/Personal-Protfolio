import React from 'react'
import './about.css'
import ME from '../../assets/ab.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineProject} from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2> About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>0+ Working Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ clients Worldwide</small>
            </article>
            
            <article className='about__card'>
              <AiOutlineProject className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article>
          </div>
          <p>
            Graduating 2024. Like to solve coding- problems.
            Have good grasp in Data Structures and
            Algorithms. Experienced in syntax of C++, (and
            basics of Java). Interested to solve real life
            problems.
            Also started Competitive Coding journey recently on
            Codeforces and CodeChef. Have learnt Flutter
            language and am interested in Android IOS
            development in the future. Good at implementation
            skills Have maintained above 9 CGPA in all
            semesters.
            Confident with strong communication and team
            leadership.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about