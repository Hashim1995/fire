import Link from 'next/link';
import React from 'react';
const WhyChooseOne = () => {
    return (
        <>
            <section className="why-choose-us">
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-xl-6 col-lg-12 col-md-12">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title">
                                    <i className="sub-title">Our benefits</i>
                                    <h2>Few Reasons to Choose Our Company.</h2>
                                    <div className="text">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem is simply free text quis bibendum.</div>
                                </div>
                                <div className="info-box">
                                    <i className="icon flaticon-job-interview" />
                                    <span className="sub-title">Benefit 01</span>
                                    <h4 className="title">Direct Online Interviews</h4>
                                    <Link href="page-about" className="read-more"><i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                                <div className="info-box">
                                    <i className="icon flaticon-approved-1" />
                                    <span className="sub-title">Benefit 02</span>
                                    <h4 className="title">Quick &amp; Easy Process</h4>
                                    <Link href="page-about" className="read-more"><i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                                <div className="info-box">
                                    <i className="icon flaticon-passport-16" />
                                    <span className="sub-title">Benefit 03</span>
                                    <h4 className="title">99% Visa Approvals</h4>
                                    <Link href="page-about" className="read-more"><i className="fa fa-long-arrow-alt-right" /></Link>
                                </div>
                            </div>
                        </div>
                        {/* Content Column */}
                        <div className="image-column col-xl-6 col-lg-12 col-md-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="image-box">
                                    <figure className="plane"><img alt="img " src="images/resource/icon-plane.png" title="Vixoz" /></figure>
                                    <figure className="image"><img alt="img " src="images/resource/image-3.png" title="Vixoz" /></figure>
                                    <figure className="stemp"><img alt="img " src="images/resource/stemp-2.png" title="Vixoz" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default WhyChooseOne;