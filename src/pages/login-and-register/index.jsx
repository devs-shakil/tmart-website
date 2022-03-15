import React from 'react'
import Footer from '../../Components/footer';
import { Header } from '../../Components/partial/Header';
import LoginRagister from './LoginRegister'

const LoginRegisterIndex = () => {
  return (
    <>
      <div className="wrapper fixed__footer">
         < Header/>
         <div className='body__overlay'></div>
         {/* Start offset wrapper */}
            
         {/* End offset wrapper */}

         {/* Login and register area start */}
          <LoginRagister/>
         {/* Login and register area end */}
          <Footer/>
      </div>    
    </>
  )
}

export default LoginRegisterIndex;