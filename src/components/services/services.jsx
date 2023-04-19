import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'


const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="Container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquid!</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquid!</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquid!</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquid!</p>
            </li>
          </ul>
        </article>
        {/* End of ui/ux */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Hello this is none other than Chhono</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Hello this is none other than Chhono</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Hello this is none other than Chhono</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Hello this is none other than Chhono</p>
            </li>
          </ul>
        </article>
      {/* end of WD */}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Hello this is none other than Chhono</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Hello this is none other than Chhono</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Hello this is none other than Chhono</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Hello this is none other than Chhono</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default services