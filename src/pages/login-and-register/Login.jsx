import React from 'react'
import SocialIcon from '../../temp/socialicon.json'

const Login = () => {
  return (
    <>
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
                        {SocialIcon.socilaicon.length > 0 && SocialIcon.socilaicon.map(loginWithSocial =>(
                                 <li key={loginWithSocial.id}>
                                    <a className={loginWithSocial.class2} href="#">
                                        <i className={loginWithSocial.class1}></i>
                                     </a>
                                </li>
                         ))}

                    </ul>
                 </div>
        </div>
    </>
  )
}

export default Login