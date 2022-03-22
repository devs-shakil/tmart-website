import React from 'react'
import { useLocation } from 'react-router-dom'
import bradcumpImg from "../../assets/images/bg/2.jpg"



const BradCaump = ({title, pageName, imgSrc}) => {
const {pathname} = useLocation();

  return (
    <>
        <div className="ht__bradcaump__area" 
            style={{
              background: " rgba(0, 0, 0, 0)",
              backgroundImage:`url("${imgSrc ? imgSrc : bradcumpImg}")`,
              backgroundRepeat:"no-repeat",
              backgroundPositon:"center center",
              backgroundSize:"cover"
            }}>
                  <div className="ht__bradcaump__wrap">
                      <div className="container">
                          <div className="row">
                              <div className="col-xs-12">
                                  <div className="bradcaump__inner text-center">
                                             <h2 className="bradcaump-title"  >{title ? title : pathname.replace("/", "")}</h2>
                                            <nav className="bradcaump-inner">
                                                <a className="breadcrumb-item" href="/">Home</a>
                                                <span className="brd-separetor">/</span>
                                                <span className="breadcrumb-item  active" >
                                                   {pageName ? pageName : pathname.replace("/", "")}
                                                </span>
                                             </nav>                                                        
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
          </div>

    </>
  )
}

export default BradCaump