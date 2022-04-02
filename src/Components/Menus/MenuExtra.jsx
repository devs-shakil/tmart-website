import React from 'react'
import { Link } from 'react-router-dom'

const MenuExtra = ({setToggleSearchArea , setToggleCartArea, setToggleOfsetMenuArea}) => {
 
 const toggleSearch = () =>{
  setToggleSearchArea(true)
 }
 const toggleCart = () =>{
  setToggleCartArea(true)
 }
 const togoOfsetMenu = () =>{
  setToggleOfsetMenuArea(true)
 }

  return (
    <div className="col-md-2 col-sm-4 col-xs-3">  
        <ul className="menu-extra">
            <li className="search search__open hidden-xs">
                <span className="ti-search"  onClick={toggleSearch}/>
            </li>
            <li>
                <Link to="/login-register">
                   <span className="ti-user"/>
                </Link>
            </li>
            <li className="cart__menu">
                <span className="ti-shopping-cart" onClick={toggleCart}/>
            </li>
            <li className="toggle__menu hidden-xs hidden-sm">
              <span className="ti-menu" onClick={togoOfsetMenu}/>
            </li>
        </ul>
    </div>
  )
}

export default MenuExtra