import React from 'react'
import bradcumpImg from "../../assets/images/bg/2.jpg"
import bradcaumpJson from '../../temp/bradcaump.json';
import menus from '../../temp/menus.json';

const BradCaump = () => {

 

  return (
    <>
        <div className="ht__bradcaump__area" 
            style={{
              background: " rgba(0, 0, 0, 0)",
              backgroundImage:`url("${bradcumpImg}")`,
              backgroundRepeat:"no-repeat",
              backgroundPositon:"center center",
              backgroundSize:"cover"
            }}>
                  <div className="ht__bradcaump__wrap">
                      <div className="container">
                          <div className="row">
                              <div className="col-xs-12">
                                  <div className="bradcaump__inner text-center">
                                      {bradcaumpJson.bradcaump.length > 0 && bradcaumpJson.bradcaump.map(bradcumpProps =>( 
                                           <div key={bradcumpProps.id}>
                                                    <h2 className="bradcaump-title"  >{bradcumpProps.id === 3 ?
                                                       bradcumpProps.text1 : ""}
                                                    </h2>

                                                    {bradcumpProps.id === 3 ? 
                                                      <nav className="bradcaump-inner">
                                                      <a className="breadcrumb-item" href="/">Home</a>
                                                      <span className="brd-separetor">/</span>
                                                      <span className="breadcrumb-item  active" >Contact</span>
                                                      </nav> : " "
                                                     }
                                                 
                                           </div>
                                        
                                         )
                                        )
                                      } 
                                    


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