import React from 'react'
import Caragories from "../../temp/catagories.json"

const Catagories = () => {
  return (
    <>
        {Caragories.categories.length > 0 && Caragories.categories.map(CategoriesProps => (
            <li key={CategoriesProps.id}>
                <a href={CategoriesProps.link}>{CategoriesProps.text}</a>
            </li>
           
           
        ))}    
    </>
  )
}

export default Catagories