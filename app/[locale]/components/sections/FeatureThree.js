import Link from 'next/link';
import React from 'react';

const FeatureThree = () => {
    return (
        <>

            <section className="features-section-three">
                <div className="row g-0">
                    {/* Feature Block Three */}
                    <div className="feature-block-three col-xl-4 col-lg-6 col-md-12 wow fadeInUp">
                        <div className="inner-box ">
                            <div className="content-box">
                                <i className="icon flaticon-passport-12" />
                                <span className="sub-title">Apply Online Visa</span>
                                <h4 className="title"><a href="#">Immigration Process Responsibility</a></h4>
                            </div>
                        </div>
                    </div>
                    {/* Feature Block Three */}
                    <div className="feature-block-three col-xl-4 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box ">
                            <div className="content-box">
                                <i className="icon flaticon-group" />
                                <span className="sub-title">Apply Online Visa</span>
                                <h4 className="title"><a href="#">Quick &amp; Easy Visa Application</a></h4>
                            </div>
                        </div>
                    </div>
                    {/* Feature Block Three */}
                    <div className="feature-block-three col-xl-4 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="800ms">
                        <div className="inner-box ">
                            <div className="content-box">
                                <i className="icon flaticon-life-insurance" />
                                <span className="sub-title">Apply Online Visa</span>
                                <h4 className="title"><a href="#">Skilled &amp; Professional Consultants</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default FeatureThree;