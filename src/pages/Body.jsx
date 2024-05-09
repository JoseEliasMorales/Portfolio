import React from 'react'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'

const Body = () => {
  return (
    <article className='xl:ml-[70px] '>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </article>
  )
}

export default Body
