import React from 'react'
import menusData from '../../temp/menus.json';
import { Link} from "react-router-dom";

const Menus = () => {
   
    
  return (
<>
   
        <nav className="mainmenu__nav hidden-xs hidden-sm">
             <ul className="main__menu">

                {menusData.menus.length > 0 && menusData.menus.map(menu => (
                     <li key={menu.id} className={menu.class}>
                         <Link to={menu.link}>{menu.text} </Link>
                            <ul className="dropdown">   
                                {menu.dropdown.length > 0 && menu.dropdown.map(dropdownItem => (
                                    <li key={dropdownItem.id} className={dropdownItem.class} >
                                        <Link to={dropdownItem.link}>{dropdownItem.text}</Link>
                                        <ul className="level-dropdown">
                                            {dropdownItem.mega_dropdown.length > 0 && dropdownItem.mega_dropdown.map(megaDropdown =>(
                                                
                                                <li key={megaDropdown.id}>
                                                    <Link to={megaDropdown.link}>{megaDropdown.text}</Link>
                                                </li>
                                                
                                            ))} 
                                         
                                        </ul> 
                                     
                                    </li>

                                    ))}
                            </ul>  
                    
                    </li>
                 
                 ))}
             
            </ul>
        </nav>

    
                      
 
</>
  );
}
export default Menus;