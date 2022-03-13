import React from 'react'
import bradcumpImg from "../../assets/images/bg/2.jpg"

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
                                      <h2 className="bradcaump-title">Contact US</h2>
                                      <nav className="bradcaump-inner">
                                        <a className="breadcrumb-item" href="index.html">Home</a>
                                        <span className="brd-separetor">/</span>
                                        <span className="breadcrumb-item active">Contact US</span>
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