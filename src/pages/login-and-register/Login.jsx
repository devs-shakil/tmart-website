import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SocialIcon from '../../temp/socialicon.json'

const Login = ({isSelectedLogin}) => {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleUserName = (e) =>{
        setUserName(e.target.value)
      
    };
    const handlePassword = (e) =>{
        setPassword(e.target.value)
     
    }

    const handleSubmit = (e) =>{
     
        e.preventDefault();
        try{
           
        }catch(error){
            console.warn("login error", error)
        }
        setUserName("");
        setPassword("");

    }


  return (
    <>
         <div className={`single__tabs__panel tab-pane fade ${isSelectedLogin ? "in active" : ""}`}>
                <form className="login" onSubmit={handleSubmit}>
                    <input type="text" placeholder="User Name*" onChange={handleUserName}/>
                    <input type="password" placeholder="Password*" onChange={handlePassword}/>
              
                    <div className="tabs__checkbox">
                        <input type="checkbox"/>
                        <span> Remember me</span>
                        <span className="forget"><Link to="#">Forget Pasword?</Link></span>
                    </div>
                    <div className="htc__login__btn mt--30">
                        <button type="submit" href="#">Login</button>
                    </div>
                </form>
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