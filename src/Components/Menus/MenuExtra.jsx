import React from 'react'
import { Link } from 'react-router-dom'

const MenuExtra = () => {
  return (
    <div className="col-md-2 col-sm-4 col-xs-3">  
        <ul className="menu-extra">
            <li className="search search__open hidden-xs"><span className="ti-search"></span></li>
            <li>
              <Link to="/login-register"><span className="ti-user"></span></Link>
            </li>
            <li className="cart__menu"><span className="ti-shopping-cart"></span></li>
            <li className="toggle__menu hidden-xs hidden-sm"><span className="ti-menu"></span></li>
        </ul>
    </div>
  )
}

export default MenuExtra