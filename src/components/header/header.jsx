import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/ab.png'
import HeaderSocial from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello  I'm</h5>
        <h1>Abhishek Kumar</h1>
        <h5 className="text-light">Aspiring Software Developer</h5>
        <CTA /> 
        <HeaderSocial/>


        <div className="me">
          <img src={me} alt="me"/>
        </div>


        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default header