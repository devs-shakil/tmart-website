import React from 'react'
import regImg from '../../assets/images/bg/5.jpg'
import Footer from '../footer'

const LoginRagister = () => {
  return (
   
    <>
    <div className="htc__login__register bg__white ptb--130" 
     style={{background: `rgba(0, 0, 0, 0)`,
     backgroundImage:` url("${regImg}")`,
     backgroundRepeat: `no-repeat`,
     backgroundPosition: 'center center',
     backgroundSize: `cover`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ul className="login__register__menu" role="tablist">
                            <li role="presentation" className="login active"><a href="#login" role="tab" data-toggle="tab">Login</a></li>
                            <li role="presentation" className="register"><a href="#register" role="tab" data-toggle="tab">Register</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Start Login Register Content --> */}
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="htc__login__register__wrap">
                            {/* <!-- Start Single Content --> */}
                            <div id="login" role="tabpanel" className="single__tabs__panel tab-pane fade in active">
                                <form className="login" method="post">
                                    
                                    <input type="text" placeholder="User Name*"/>
                                    <input type="password" placeholder="Password*"/>
                                </form>
                                <div className="tabs__checkbox">
                                    <input type="checkbox"/>
                                    <span> Remember me</span>
                                    <span className="forget"><a href="#">Forget Pasword?</a></span>
                                </div>
                                <div className="htc__login__btn mt--30">
                                    <a href="#">Login</a>
                                </div>
                                <div className="htc__social__connect">
                                    <h2>Or Login With</h2>
                                    <ul className="htc__soaial__list">
                                        <li><a className="bg--twitter" href="#"><i className="zmdi zmdi-twitter"></i></a></li>

                                        <li><a className="bg--instagram" href="#"><i className="zmdi zmdi-instagram"></i></a></li>

                                        <li><a className="bg--facebook" href="#"><i className="zmdi zmdi-facebook"></i></a></li>

                                        <li><a className="bg--googleplus" href="#"><i className="zmdi zmdi-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End Single Content --> */}
                            {/* <!-- Start Single Content --> */}
                            <div id="register" role="tabpanel" className="single__tabs__panel tab-pane fade">
                                <form className="login" method="post">
                                    <input type="text" placeholder="Name*"/>
                                    <input type="email" placeholder="Email*"/>
                                    <input type="password" placeholder="Password*"/>
                                </form>
                                <div className="tabs__checkbox">
                                    <input type="checkbox"/>
                                    <span> Remember me</span>
                                </div>
                                <div className="htc__login__btn">
                                    <a href="#">register</a>
                                </div>
                                <div className="htc__social__connect">
                                    <h2>Or Login With</h2>
                                    <ul className="htc__soaial__list">
                                        <li><a className="bg--twitter" href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                                        <li><a className="bg--instagram" href="#"><i className="zmdi zmdi-instagram"></i></a></li>
                                        <li><a className="bg--facebook" href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                                        <li><a className="bg--googleplus" href="#"><i className="zmdi zmdi-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End Single Content --> */}
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