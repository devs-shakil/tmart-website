import React, { useEffect, useState } from 'react'
import Menus from '../Menus'
import MenuExtra from '../Menus/MenuExtra'
import logo from '../../assets/images/logo/logo.png'
import { Link } from 'react-router-dom'
import Footer from '../footer';
import Ofset from '../ofset'
import Search from '../ofset/Search'
import ShoppingCart from '../ofset/ShoppingCart'

export const Header = () => {
    const [toggleSearchArea, setToggleSearchArea] = useState(false);
    const [toggleCartArea, setToggleCartArea] = useState(false)
    console.log(toggleCartArea)
    useEffect(() => {
        document.querySelector('body').classList.add('search__box__show__hide');
    },[]);
    
    useEffect(() =>{
        document.querySelector('body').classList.add('shopping__cart__on');
       
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
                        <Menus />
                        {/* <!-- End Main menu Areas --> */}
                        
                        <MenuExtra setToggleSearchArea={setToggleSearchArea} setToggleCartArea={setToggleCartArea} />
                    </div>

                    <div className="mobile-menu-area"></div>
                </div>
            </div>
            {/* // <!-- End Mainmenu Area --> */}
        </header>

        <div className="body__overlay  "></div>

        {toggleSearchArea && (
            <Search setToggleSearchArea={setToggleSearchArea}/>

        )}
        {toggleCartArea && (
            <ShoppingCart setToggleCartArea={setToggleCartArea} />
        )}

   
   </>
      
  )
}

// export default Header