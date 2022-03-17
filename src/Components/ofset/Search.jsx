import React from 'react'

const Search = ( {setToggleSearchArea}) => {
   
const change = () =>{
    setToggleSearchArea(false)
}

  return (

    <>
       

            <div className="search__area">
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-12" >
                            <div className="search__inner">
                                <form action="#" method="get">
                                    <input placeholder="Search here... " type="text"/>
                                    <button type="submit"></button>
                                </form>
                                <div className="search__close__btn">
                                    <span className="search__close__btn_icon" onClick={change} ><i className="zmdi zmdi-close"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    
        

            
    </>
  )
}

export default Search