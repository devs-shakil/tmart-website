import React from 'react'
import { Header } from '../../Components/partial/Header';
import Footer from '../../Components/footer';
import CategoriesMenu from './CategoriesMenu';
import HeroSlider from './HeroSlider';


const Home = () => {   
  return (
    <>
        <Header />
        <CategoriesMenu/>
        
        <Footer/>
    </>
  );
}

export default Home