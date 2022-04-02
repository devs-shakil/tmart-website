import React from 'react';
import SocialIcon from '../../temp/socialicon.json';
import sidebarThumb from '../../temp/sidebarthumb.json';
import logo from '../../assets/images/logo/logo.png'

const OfsetMenu = ({toggleOfsetMenuArea , setToggleOfsetMenuArea}) => {

    const closeToggleOfsetMenu = () =>{
        setToggleOfsetMenuArea(false)
    }
    
  return (
    <>
         <div className={`offsetmenu ${toggleOfsetMenuArea ? "offsetmenu__on" : ""}`}>
                <div className="offsetmenu__inner">
                    <div className="offsetmenu__close__btn">
                        <a href="#" onClick={closeToggleOfsetMenu}><i className="zmdi zmdi-close"></i></a>
                    </div>
                    <div className="off__contact">
                        <div className="logo">
                            <a href="index.html">
                                <img src={logo} alt="logo"/>
                            </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <ul className="sidebar__thumd">
                        {sidebarThumb.sideBarThum.length > 0 && sidebarThumb.sideBarThum.map(sidebarProps =>(
                               <li key={sidebarProps.id}>
                               <a href={sidebarProps.link}>
                                   <img src={sidebarProps.src} alt="" />
                               </a>
                           </li>
                            
                       ))}
                    </ul>
                    <div className="offset__widget">
                        <div className="offset__single">
                            <h4 className="offset__title">Language</h4>
                            <ul>
                                <li><a href="#"> Engish </a></li>
                                <li><a href="#"> French </a></li>
                                <li><a href="#"> German </a></li>
                            </ul>
                        </div>
                        <div className="offset__single">
                            <h4 className="offset__title">Currencies</h4>
                            <ul>
                                <li><a href="#"> USD : Dollar </a></li>
                                <li><a href="#"> EUR : Euro </a></li>
                                <li><a href="#"> POU : Pound </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="offset__sosial__share">
                        <h4 className="offset__title">Follow Us On Social</h4>
                        <ul className="off__soaial__link">

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
            </div>
    </>
  )
}

export default OfsetMenu