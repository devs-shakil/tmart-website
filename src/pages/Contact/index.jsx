import React from 'react';
import { Header } from '../../Components/partial/Header';
import ContactArea from './ContactArea';
import BradCaump from './BradCaump';
import Ofset from '../../Components/ofset';
import Information from '../footer/Information';
import Catagories from '../footer/catagories';
import Footer from '../footer';


const Contact = () => {
  return (
    <>
     <div className="wrapper fixed__footer">
          <Header/>

          <div className="body__overlay"></div>



          {/* ofset wrapper start */}
              <Ofset/>
          {/* ofset wrapper end  */}

        
            <BradCaump/>
            <ContactArea/>
            
         
     </div>
   


    </>
  )
}

export default Contact