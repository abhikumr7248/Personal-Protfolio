import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineYoutube} from 'react-icons/ai'


const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Abhishek Kumar</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><BsInstagram/></a>
        <a href="https://youtube.com"><BsTwitter/></a>
        <a href="https://twitter.com"><AiOutlineYoutube/></a>
      </div>


       <div className="footer__copyright">
        <small>&copy; Abhishek. All rights reserved.</small>

       </div>
    </footer>
  )
}

export default footer