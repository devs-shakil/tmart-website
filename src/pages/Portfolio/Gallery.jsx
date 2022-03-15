import React from 'react';
import img1 from "../../assets/images/portfolio/equal/1.jpg"

const Gallery = () => {
  return (
    
    <div className="portfolio-grid-area bg__white pt--130 pb--100">
    <div className="container">
        <div className="portfolio-menu-active gutter-btn mb--50 text-center">
            <button className="active" data-filter="*">All works</button>
            <button data-filter=".cat2">print</button>
            <button data-filter=".cat3">Webdesign</button>
            <button data-filter=".cat5">Photography</button>

        </div>
        <div className="portfolio-style">
            <div className="row grid">
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat2 cat3">
                    <div className="single-portfolio-card mb--30">
                        <div className="portfolio-img">
                            <a href="single-portfolio.html">
                                <img src={img1} alt="" />
                            </a>
                            <div className="portfolio-icon">
                                <a className="img-poppu" href="images/portfolio/equal/2.jpg">
                                    <i className="zmdi zmdi-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="portfolio-title portfolio-card-title text-center">
                            <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                            <span>Design</span>
                        </div>				
                    </div>					
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat5 cat2">
                    <div className="single-portfolio-card mb--30">
                        <div className="portfolio-img">
                            <a href="single-portfolio.html">
                                <img src={img1} alt="" />
                            </a>
                            <div className="portfolio-icon">
                                <a className="video-popup" href="https://www.youtube.com/watch?v=cDDWvj_q-o8">
                                    <i className="zmdi zmdi-videocam"></i>
                                </a>
                            </div>
                        </div>
                        <div className="portfolio-title portfolio-card-title text-center">
                            <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                            <span>Design</span>
                        </div>				
                    </div>						
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat2 cat3">
                    <div className="single-portfolio-card mb--30">
                        <div className="portfolio-img">
                            <a href="single-portfolio.html">
                                <img src={img1} alt="" />
                            </a>
                            <div className="portfolio-icon">
                                <a className="video-popup" href="https://www.youtube.com/watch?v=cDDWvj_q-o8">
                                    <i className="zmdi zmdi-videocam"></i>
                                </a>
                            </div>
                        </div>
                        <div className="portfolio-title portfolio-card-title text-center">
                            <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                            <span>Design</span>
                        </div>				
                    </div>					
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat5 cat2">
                    <div className="single-portfolio-card mb--30">
                        <div className="portfolio-img">
                            <a href="single-portfolio.html">
                                <img src={img1} alt="" />
                            </a>
                            <div className="portfolio-icon">
                                <a className="img-poppu" href="images/portfolio/equal/2.jpg">
                                    <i className="zmdi zmdi-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="portfolio-title portfolio-card-title text-center">
                            <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                            <span>Design</span>
                        </div>				
                    </div>						
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat2 cat5">
                    <div className="single-portfolio-card mb--30">
                        <div className="portfolio-img">
                            <a href="single-portfolio.html">
                                <img src={img1} alt="" />
                            </a>
                            <div className="portfolio-icon">
                                <a className="video-popup" href="https://www.youtube.com/watch?v=cDDWvj_q-o8">
                                    <i className="zmdi zmdi-videocam"></i>
                                </a>
                            </div>
                        </div>
                        <div className="portfolio-title portfolio-card-title text-center">
                            <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                            <span>Design</span>
                        </div>				
                    </div>					
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat3 cat5">
                    <div className="single-portfolio-card mb--30">
                        <div className="portfolio-img">
                            <a href="single-portfolio.html">
                                <img src={img1} alt="" />
                            </a>
                            <div className="portfolio-icon">
                                <a className="img-poppu" href="images/portfolio/equal/2.jpg">
                                    <i className="zmdi zmdi-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="portfolio-title portfolio-card-title text-center">
                            <h3><a href="single-portfolio.html">TITLE GOES HERE</a></h3>
                            <span>Design</span>
                        </div>				
                    </div>					
                </div>
            </div>		
        </div>
    </div>
</div>
  )
}

export default Gallery