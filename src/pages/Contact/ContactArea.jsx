import React from 'react'

const ContactArea = () => {
  return (
    <>
         <section className="htc__contact__area ptb--120 bg__white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
                        <div className="htc__contact__container">
                            <div className="htc__contact__address">
                                <h2 className="contact__title">contact info</h2>
                                <div className="contact__address__inner">
                                    {/* <!-- Start Single Adress --> */}
                                    <div className="single__contact__address">
                                        <div className="contact__icon">
                                            <span className="ti-location-pin"></span>
                                        </div>
                                        <div className="contact__details">
                                            <p>Location : <br/> 77, seventh avenue, Brat road USA.</p>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Adress --> */}
                                </div>
                                <div className="contact__address__inner">
                                    {/* <!-- Start Single Adress --> */}
                                    <div className="single__contact__address">
                                        <div className="contact__icon">
                                            <span className="ti-mobile"></span>
                                        </div>
                                        <div className="contact__details">
                                            <p> Phone : <br/><a href="#">+012 345 678 102 </a></p>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Adress --> */}
                                    {/* <!-- Start Single Adress --> */}
                                    <div className="single__contact__address">
                                        <div className="contact__icon">
                                            <span className="ti-email"></span>
                                        </div>
                                        <div className="contact__details">
                                            <p> Mail :<br/><a href="#">info@example.com</a></p>
                                        </div>
                                    </div>
                                    {/* <!-- End Single Adress --> */}
                                </div>
                            </div>
                            <div className="contact-form-wrap">
                            <div className="contact-title">
                                <h2 className="contact__title">Get In Touch</h2>
                            </div>
                            <form id="contact-form" action="mail.php" method="post">
                                <div className="single-contact-form">
                                    <div className="contact-box name">
                                        <input type="text" name="name" placeholder="Your Nme*"/>
                                        <input type="email" name="email" placeholder="Mail*"/>
                                    </div>
                                </div>
                                <div className="single-contact-form">
                                    <div className="contact-box subject">
                                        <input type="text" name="subject" placeholder="Subject*"/>
                                    </div>
                                </div>
                                <div className="single-contact-form">
                                    <div className="contact-box message">
                                        <textarea name="message"  placeholder="Massage*"></textarea>
                                    </div>
                                </div>
                                <div className="contact-btn">
                                    <button type="submit" className="fv-btn">SEND</button>
                                </div>
                            </form>
                        </div> 
                        <div className="form-output">
                            <p className="form-messege"></p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 smt-30 xmt-30">
                        <div className="map-contacts">
                            <div id="googleMap"></div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    </>
  )
}

export default ContactArea