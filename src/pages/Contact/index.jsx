import React from 'react';
import { Header } from '../../Components/partial/Header';
import ContactArea from './ContactArea';
import BradCaump from './BradCaump';


const Contact = () => {
  return (
    <>
     <div className="wrapper fixed__footer">
          <Header/>

          <div className="body__overlay"></div>



          {/* ofset wrapper start */}
              {/* ekhane ofset hobe */}
          {/* ofset wrapper end  */}

        
            <BradCaump/>
            <ContactArea/>
            
         



     </div>
   


    </>
  )
}

export default Contact