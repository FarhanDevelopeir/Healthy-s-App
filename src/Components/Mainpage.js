import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HeroSection from './HeroSection'
import Products from './Products'

const Mainpage = () => {
  return (
    <div className='bg-gray-200'>
        <Header/>
        <HeroSection/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Mainpage