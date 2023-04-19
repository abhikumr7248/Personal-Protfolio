 //type rafc
import React from 'react'
import _header from './components/header/header.jsx'
import _nav from './components/nav/nav.jsx'
import _about from './components/about/about.jsx'
import _experience from './components/experience/experience.jsx'
import _services from './components/services/services.jsx'
import _portfolio from './components/portfolio/portfolio.jsx'
import _testimonials from './components/testimonials/testimonials.jsx'
import _Contact from './components/contact/Contact.jsx'
import _footer from './components/footer/footer.jsx'

const App = () => {
  return (
    <>
        <_header />
        <_nav/>
        <_about/>
        <_experience/>
        <_services/>
        <_portfolio/>
        {/* <_testimonials/> */}
        <_Contact/>
        <_footer/>
    </>
  )
}

export default App
