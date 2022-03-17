import React from 'react'
import Footer from '../../Components/footer'
import { Header } from '../../Components/partial/Header'
import BradCaump from '../../Components/partial/BradCaump'
import Gallery from './Gallery'


const Portfolio = () => {
  return (
    <div>
        <Header/>
        <BradCaump/>
        <Gallery/>
        <Footer/>
    </div>
  )
}

export default Portfolio