import React from 'react'
import OfsetMenu from './OfsetMenu'
import Search from './Search'
import ShoppingCart from './ShoppingCart'

const Ofset = () => {
  return ( 
    <div className="offset__wrapper">
        <Search/>
        <OfsetMenu/>
        <ShoppingCart/>
     </div>
   )
}

export default Ofset