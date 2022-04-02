import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import "react-slideshow-image/dist/styles.css"
import { Slide } from 'react-slideshow-image';
import slider1 from '../../assets/images/slider/bg/1.png'


const HeroSlider = () => {
  return (
    <>
    
       <div className="col-md-9 col-lg-9 col-sm-8 col-xs-12 float-left-style">
                         {/* Start Slider Area  */}
                        <Slide easing="ease">
                            <div className=" owl-carousel owl-theme ">
                                 {/* Start Single Slide  */}
                                <div className='each-slide'>
                                    <div className="slide slider__full--screen slider-height-inherit slider-text-right" 
                                        style={{
                                        background: 'rgba(0, 0, 0, 0)', 
                                        backgroundImage:` url(${slider1})`, 
                                        backgroundRepait: 'no-repeat ',
                                        backgrorundPositon: 'center center' ,
                                        backgroundSize: 'cover' ,
                                        height:'540px'
                                    
                                    }}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-10 col-lg-8 col-md-offset-2 col-lg-offset-4 col-sm-12 col-xs-12">
                                                    <div className="">
                                                        <h1>New Product <span className="text--theme">Collection</span></h1>
                                                        <div className="slider__btn">
                                                            <a className="htc__btn" href="cart.html">shop now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 {/* End Single Slide  */}
                                
                            </div>
                        </Slide>
                         {/* Start Slider Area  */}
         </div>   
    
    </>
  )
}

export default HeroSlider