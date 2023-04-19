import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'


const experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have </h5>
      <h2>My Experience</h2>

      <div className="ocntainer experience__container">
        <div className="experience__frontend">
          <h3>Frontend Develoment</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermedeate</small>
               </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermedeate</small>
               </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermedeate</small>
               </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
               </div>
            </article>

          </div>
        </div>


      {/*end of frontend */}



        <div className="experience__backend">
        <h3>Backend Develoment</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
                <h4>ModgoDB</h4>
                <small className='text-light'>Intermedeate</small>
               </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermedeate</small>
               </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
                <h4>Python</h4>
                <small className='text-light'>Intermedeate</small>
               </div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
               <div>
                <h4>MySql</h4>
                <small className='text-light'>Experienced</small>
               </div>
            </article>

          </div>
        </div>
      </div>
    </section>
    

  )
}

export default experience