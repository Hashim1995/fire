import Link from 'next/link';
import React, { useState } from 'react';

const WhyChooseTwo = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

            <section className="why-choose-us-two">
                <div className="bg-layer" />
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    <i className="sub-title">Our benefits</i>
                                    <h2>Few Reasons to Choose Our Company.</h2>
                                    <div className="text">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum. There are many variations of passages of available.</div>
                                </div>
                                <div className="info-box">
                                    <div className="inner">
                                        <figure className="thumb"><img src="images/resource/avatar-1.jpg" title="Vixoz" /></figure>
                                        <h5 className="title">Aleesha Brown</h5>
                                        <span className="sub-title">CEO &amp; CO Founder</span>
                                    </div>
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></Link>
                                </div>
                            </div>
                        </div>
                        {/* Features Column */}
                        <div className="features-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="row">
                                    {/* Feature Block Two */}
                                    <div className="feature-block-two col-lg-6 co-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <h5>Direct Interviews</h5>
                                            <div className="text">Fusce pretium sem is the eget mattis</div>
                                            <span className="icon fa fa-users" />
                                        </div>
                                    </div>
                                    {/* Feature Block Two */}
                                    <div className="feature-block-two col-lg-6 co-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <h5>Cost-Effective</h5>
                                            <div className="text">Fusce pretium sem is the eget mattis</div>
                                            <span className="icon fa fa-funnel-dollar" />
                                        </div>
                                    </div>
                                    {/* Feature Block Two */}
                                    <div className="feature-block-two col-lg-6 co-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <h5>Trusted by Clients</h5>
                                            <div className="text">Fusce pretium sem is the eget mattis</div>
                                            <span className="icon fa fa-handshake" />
                                        </div>
                                    </div>
                                    {/* Feature Block Two */}
                                    <div className="feature-block-two col-lg-6 co-md-6 col-sm-12">
                                        <div className="inner-box">
                                            <h5>24/7 Support</h5>
                                            <div className="text">Fusce pretium sem is the eget mattis</div>
                                            <span className="icon fa fa-headset" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default WhyChooseTwo;