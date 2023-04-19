// import React, { useRef } from 'react'
import { useRef } from 'react'
import { useRef as UseRef } from "react";
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

import emailjs from 'emailjs-com'

/* 3:04:19 */

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v2nul4i', 'template_jmfkbfe', form.current, 'p-5M1R3dlsoi8G1ra')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
};


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__option">

          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>aefghtemp@gmail.com</h5>
            <a href="mailto:aefghtemo@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>abhikumar5683</h5>
            <a href="https://ig.me/swastikchatterjee">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>abhi5683</h5>
            {/* <a href="mailto:aefghtemo@gmail.com">Send a Message</a> */}
            <a href="https://twitter.com/messages/compose?recipient_id=swastik4805&text=Hello%20world"
              class="twitter-dm-button" data-screen-name="@swastik4805">
            Message @abhi5683</a>
          </article> 
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button t ype='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact