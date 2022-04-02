import React, { useEffect, useState } from 'react'
import Menus from '../Menus'
import MenuExtra from '../Menus/MenuExtra'
import logo from '../../assets/images/logo/logo.png'
import { Link } from 'react-router-dom'
import Search from '../ofset/Search'
import ShoppingCart from '../ofset/ShoppingCart'
import OfsetMenu from '../ofset/OfsetMenu'
import MobileMenu from '../Menus/MobileMenu'

export const Header = () => {
    const [toggleSearchArea, setToggleSearchArea] = useState(false);
    const [toggleCartArea, setToggleCartArea] = useState(false)
    const [toggleOfsetMenuArea, setToggleOfsetMenuArea] = useState(false)
    useEffect(() => {
        document.querySelector('body').classList.add('search__box__show__hide');
    },[]);
    
   

    
  return (
   <>
     <header id="header" className="htc-header header--3 bg__white">
            {/* <!-- Start Mainmenu Area --> */}
            <div id="sticky-header-with-topbar" className="mainmenu__area sticky__header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                            <div className="logo">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>

                        {/* <!-- Start Main menu Areas --> */}
                        <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                             <Menus />   
                             <MobileMenu/>
                        </div>
                        {/* <!-- End Main menu Areas --> */}
                        
                        <MenuExtra setToggleSearchArea={setToggleSearchArea} setToggleCartArea={setToggleCartArea} setToggleOfsetMenuArea={setToggleOfsetMenuArea}/>
                    </div>

                    <div className="mobile-menu-area"></div>
                </div>
            </div>
            {/* // <!-- End Mainmenu Area --> */}

             
        </header>

        <div className={`body__overlay ${toggleSearchArea || toggleCartArea || toggleOfsetMenuArea ? (' is-visible') : ""} `}/>

        {toggleSearchArea && (
            <Search setToggleSearchArea={setToggleSearchArea}/>

        )}
        {toggleCartArea && (
            <ShoppingCart setToggleCartArea={setToggleCartArea} toggleCartArea={toggleCartArea}  />
        )}
        {toggleOfsetMenuArea && (
            <OfsetMenu toggleOfsetMenuArea={toggleOfsetMenuArea} setToggleOfsetMenuArea={setToggleOfsetMenuArea}/>

        )}
   
   </>
      
  )
}

// export default Header