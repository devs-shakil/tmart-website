import React, { useState } from 'react'
import regImg from '../../assets/images/bg/5.jpg'
import Login from './Login'
import Registion from './Registion'

const LoginRagister = () => {

        const [isSelectedLogin, setSelectedLogin] = useState(true);
        const [isSelectedRegister, setSelectedRegister] = useState(false);

        const handleLogin = () => {
            setSelectedLogin(true);
            setSelectedRegister(false);
        }
    
        const handleRegister = () =>{
            setSelectedLogin(false);
            setSelectedRegister(true)
        }
    

  return (
   
    <>
    <div className="htc__login__register bg__white ptb--130" 
     style={{background: `rgba(0, 0, 0, 0)`,
     backgroundImage:` url("${regImg}")`,
     backgroundRepeat: `no-repeat`,
     backgroundPosition: `center center`,
     backgroundSize: `cover`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ul className="login__register__menu" role="tablist">
                            <li role="presentation" className={`login  ${isSelectedLogin ? "active" : ""}`}>
                                <a href="#login" role="tab" data-toggle="tab" onClick={handleLogin}>Login</a>
                            </li>
                            <li role="presentation" className={`register ${isSelectedRegister ? "active" : ""}`}>
                                <a href="#register" role="tab" data-toggle="tab" onClick={handleRegister}> Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Start Login Register Content --> */}
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="htc__login__register__wrap">
                          
                            {isSelectedLogin &&  <Login isSelectedLogin={isSelectedLogin}/> }
                           
                            {isSelectedRegister &&    <Registion isSelectedRegister={isSelectedRegister}/> }
                           
                        </div>
                    </div>
                </div>
                {/* <!-- End Login Register Content --> */}
            </div>
    </div>
   
    </>
  )
}

export default LoginRagister