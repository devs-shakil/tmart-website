import React from 'react';
import categoriesMenu from '../../temp/categoriesMenu.json'

const Categoriesjson = () => {
  return (
    <>
      {  categoriesMenu.categoriesjson.length> 0 && categoriesMenu.categoriesjson.map(categroriesMenuProps => (
        <li key={categroriesMenuProps.id} > 
            <a href={categroriesMenuProps.link}>
                {categroriesMenuProps.text}
            </a>
        </li>
    ))
    }
    </>
  )
}

export default Categoriesjson;