import React, { useState } from 'react';
import img1 from "../../assets/images/portfolio/equal/1.jpg";
import GalleryJson from '../../temp/Gallery.json'

const Gallery = () => {
    const [items, setItems] = useState(GalleryJson);
    const filterItem = (cateItem) =>{
        const updateItem = GalleryJson.filter(curElem =>{
            return curElem.categories === cateItem ;
        });
        setItems(updateItem);
        console.log(cateItem.className)
    }


    
  return (
    
    <div className="portfolio-grid-area bg__white pt--130 pb--100">
    <div className="container">
        <div className="portfolio-menu-active gutter-btn mb--50 text-center">
            <button className="active" data-filter="*" onClick={ () => filterItem(items)}>All works</button>
            <button  onClick={ () => filterItem('webdesign')}>Webdesign</button>
            <button  onClick={ () => filterItem('photography')}>Photography</button>
            <button  onClick={ () => filterItem('print')}>print</button>

        </div>
        <div className="portfolio-style">
            <div className="row grid">
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat2 cat3">
                        

                        {GalleryJson.gallery.length >0 && GalleryJson.gallery.map(galleryProps =>(
                        <div className="portfolio-img" key={galleryProps.id}>
                                <div className="single-portfolio-card mb--30"  >
                                    <a href={galleryProps.link} >
                                    <img src={img1} alt="" />
                                    </a>

                                    <div className={galleryProps.class1}>
                                        <a className={galleryProps.class2} href="../../assets/images/portfolio/equal/1.jpg">
                                            <i className={galleryProps.class3}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="portfolio-title portfolio-card-title text-center" >
                                    <h3>
                                        <a href="single-portfolio.html">{galleryProps.title}</a>
                                    </h3>
                                    <span>{galleryProps.categories}</span>
                                </div>
                        </div>
                         ))}

                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item cat5 cat2">
                        
                        {GalleryJson.gallery.length >0 && GalleryJson.gallery.map(galleryProps =>(
                        <div className="portfolio-img" key={galleryProps.id}>
                                <div className="single-portfolio-card mb--30">
                                    <a href={galleryProps.link}>
                                    <img src={img1} alt="" />
                                    </a>

                                    <div className={galleryProps.class1}>
                                        <a className={galleryProps.class2} href="../../assets/images/portfolio/equal/1.jpg">
                                            <i className={galleryProps.class3}></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="portfolio-title portfolio-card-title text-center">
                                    <h3>
                                        <a href="single-portfolio.html">{galleryProps.title}</a>
                                    </h3>
                                    <span>{galleryProps.categories}</span>
                                </div>
                        </div>
                         ))}				
                </div> 
                
            </div>		
        </div>
    </div>
</div>
  )
}

export default Gallery