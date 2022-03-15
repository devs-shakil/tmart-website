import React from 'react';
import { Header } from '../../Components/partial/Header';
import ContactArea from './ContactArea';
import BradCaump from './BradCaump';
import Ofset from '../../Components/ofset';
import Footer from '../../Components/footer';



const Contact = () => {
  return (
    <>
    
          <Header/>

          <div className="body__overlay"></div>



          {/* ofset wrapper start */}
              <Ofset/>
          {/* ofset wrapper end  */}

        
            <BradCaump/>
            <ContactArea/>
            <Footer/>
            
         
    
   


    </>
  )
}

export default Contact