import React from 'react';
import Link from 'next/link';

const FeatureOne = () => {
    return (
        <>
            <section className="features-section">
                <div className="anim-icons">
                    <span className="icon icon-object-1" />
                </div>
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="row">
                            {/* Feature Block */}
                            <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box ">
                                    <div className="icon-box">
                                        <span className="count">01</span>
                                        <i className="icon flaticon-passport" />
                                    </div>
                                    <div className="content-box">
                                        <h5 className="title">Apply for New Visa Online</h5>
                                        <div className="text">Lorem ipsum is simply free dolo sit amet, ctetur.</div>
                                    </div>
                                </div>
                            </div>
                            {/* Feature Block */}
                            <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                                <div className="inner-box ">
                                    <div className="icon-box">
                                        <span className="count">02</span>
                                        <i className="icon flaticon-visa-4" />
                                    </div>
                                    <div className="content-box">
                                        <h5 className="title">Skilled Immigration Programs</h5>
                                        <div className="text">Lorem ipsum is simply free dolo sit amet, ctetur.</div>
                                    </div>
                                </div>
                            </div>
                            {/* Feature Block */}
                            <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                                <div className="inner-box ">
                                    <div className="icon-box">
                                        <span className="count">03</span>
                                        <i className="icon flaticon-stamp-1" />
                                    </div>
                                    <div className="content-box">
                                        <h5 className="title">Required a Visa Documents</h5>
                                        <div className="text">Lorem ipsum is simply free dolo sit amet, ctetur.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-text">
                            Top Rated By Customers &amp; Immigration Firms With 100% Success Rate.
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default FeatureOne;