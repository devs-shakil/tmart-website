import React from 'react';
import Categoriesjson from './Categoriesjson';
import feathureimg5 from '../../assets/images/feature-img/5.jpg'
import fethureimg2 from '../../assets/images/feature-img/2.png'
import fethureimg1 from '../../assets/images/feature-img/1.png'
import brand6 from '../../assets/images/brand/6.png'
import brand7 from '../../assets/images/brand/7.png'
import brand8 from '../../assets/images/brand/8.png'
import brand9 from '../../assets/images/brand/9.png'
import HeroSlider from './HeroSlider';



const CategoriesMenu = () => {
  return (
    <>
         <section className="categories-slider-area bg__white">
            <div className="container">
                <div className="row">
                    {/*  Start Left Feature  */}
                        <HeroSlider/>
                        
                    <div className="col-md-3 col-lg-3 col-sm-4 col-xs-12 float-right-style">
                        <div className="categories-menu mrg-xs">
                            <div className="category-heading">
                               <h3> Browse Categories</h3>
                            </div>
                            <div className="category-menu-list">
                                <ul>
                                    <li><a href="#"><img alt="" src="images/icons/thum2.png"/> Women’s Clothing <i className="zmdi zmdi-chevron-right"></i></a>
                                        <div className="category-menu-dropdown">
                                            <div className="category-part-1 category-common mb--30">
                                                <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                <ul>
                                               
                                                    <Categoriesjson/>
                                                    
                                                </ul>
                                            </div>
                                            <div className="category-part-2 category-common mb--30">
                                                <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                <ul>
                                                    <Categoriesjson/>
                                                </ul>
                                            </div>
                                            <div className="category-part-3 category-common">
                                                <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                <ul>
                                                     <Categoriesjson/>
                                                </ul>
                                            </div>
                                            <div className="category-part-4 category-common">
                                                <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                <ul>
                                                     <Categoriesjson/>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#"><img alt="" src="images/icons/thum3.png"/> Man Fashion <i className="zmdi zmdi-chevron-right"></i></a>
                                        <div className="category-menu-dropdown">
                                            <div className="category-part-1 category-common2 mb--30">
                                                <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                <ul>
                                                    <Categoriesjson/>
                                                </ul>
                                            </div>
                                            <div className="category-part-2 category-common2 mb--30">
                                                <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                <ul>
                                                  <Categoriesjson/>
                                                </ul>
                                            </div>
                                            <div className="category-part-3 category-common2 mb--30">
                                                <h4 className="categories-subtitle">dress</h4>
                                                <ul>
                                                  <Categoriesjson/>
                                                </ul>
                                            </div>
                                            <div className="mega-banner-img">
                                                <a href="single-product.html">
                                                    <img src={feathureimg5} alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#"><img alt="" src="images/icons/thum4.png"/> Computer & Office <i className="zmdi zmdi-chevron-right"></i></a>
                                        <div className="category-menu-dropdown">
                                            <div className="category-menu-dropdown-top">
                                                <div className="category-part-1 category-common2 mb--30">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                         <Categoriesjson/>
                                                    </ul>
                                                </div>
                                                <div className="category-part-2 category-common2 mb--30">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                         <Categoriesjson/>
                                                    </ul>
                                                </div>
                                                <div className="category-part-3 category-common2 mb--30">
                                                    <h4 className="categories-subtitle">Jewelry & Watches</h4>
                                                    <ul>
                                                         <Categoriesjson/>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="category-menu-dropdown-bottom">
                                                <div className="single-category-brand">
                                                    <a href="#"><img src={brand6} alt=""/></a>
                                                </div>
                                                <div className="single-category-brand">
                                                    <a href="#"><img src={brand7} alt=""/></a>
                                                </div>
                                                <div className="single-category-brand">
                                                    <a href="#"><img src={ brand8} alt=""/></a>
                                                </div>
                                                <div className="single-category-brand">
                                                    <a href="#"><img src={brand9} alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#"><img alt="" src="images/icons/thum5.png"/> Jewelry & Watches <i className="zmdi zmdi-chevron-right"></i></a>
                                        <div className="category-menu-dropdown">
                                            <div className="category-menu-dropdown-left">
                                                <div className="category-part-1 category-common mb--30">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                         <Categoriesjson/>
                                                    </ul>
                                                </div>
                                                <div className="category-part-2 category-common mb--30">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                      <Categoriesjson/>
                                                    </ul>
                                                </div>
                                                <div className="category-part-3 category-common">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                        <Categoriesjson/>
                                                    </ul>
                                                </div>
                                                <div className="category-part-4 category-common">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                        <Categoriesjson/>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="category-menu-dropdown-right">
                                                <div className="menu-right-img">
                                                    <a href="#"><img src={fethureimg2} alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#"><img alt="" src='' /> Men’s Clothing <i className="zmdi zmdi-chevron-right"></i></a>
                                        <div className="category-menu-dropdown">
                                            <div className="category-menu-dropdown-left">
                                                <div className="category-part-1 category-common">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                         <Categoriesjson/>
                                                    </ul>
                                                </div>
                                                <div className="category-part-2 category-common">
                                                    <h4 className="categories-subtitle"> Jewelry & Watches</h4>
                                                    <ul>
                                                      <Categoriesjson/>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="category-menu-dropdown-right">
                                                <div className="menu-right-img">
                                                    <a href="#"><img src='' alt=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="#"><img alt="" src="images/icons/thum8.png"/> Toys & Kids & Baby</a></li>
                                    <li><a href="#"><img alt="" src="images/icons/thum9.png"/>  Automobiles </a></li>
                                    <li><a href="#"><img alt="" src="images/icons/thum7.png"/> Bags & Shoes</a></li>
                                    <li><a href="#"><img alt="" src="images/icons/thum10.png"/> Jewelry & Watches</a></li>
                                    <li><a href="#"><img alt="" src="images/icons/thum2.png"/> Consumer Electronics</a></li>
                                    <li><a href="#"><img alt="" src="images/icons/thum3.png"/> all Accessories</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     {/* End Left Feature  */}
                </div>
            </div>
        </section>    
    </>
  )
}

export default CategoriesMenu