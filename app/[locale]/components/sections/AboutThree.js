import Link from 'next/link';
import React from 'react';

const AboutThree = () => {
    return (
        <>
            <section className="about-section-three pt-0">
                <div className="anim-icons">
                    <span className="icon icon-object-1" />
                    <span className="icon icon-object-4" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 wow fadeInRight" data-wow-delay="600ms">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">About our company</span>
                                    <h2>We Help you from Start to End Immigration.</h2>
                                    <div className="text">There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</div>
                                    <ul className="list-style-three">
                                        <li>Lorem Ipsum is not simply random text</li>
                                        <li>Making this the first true generator on the Internet.</li>
                                    </ul>
                                </div>
                                <div className="content-box">
                                    <div className="info-box">
                                        <i className="icon flaticon-cooperation" />
                                        <h6 className="title">Trusted by Clients</h6>
                                    </div>
                                    <h5 className="title">24/7 Support</h5>
                                    <div className="text">Lorem ipsum is simply velit anod ipas aliquet enean quis.</div>
                                    <Link href="page-about" className="theme-btn btn-style-one"><span className="btn-title">Explore now</span></Link>
                                </div>
                            </div>
                        </div>
                        {/* Image Column */}
                        <div className="image-column col-xl-6 col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <span className="icon-dots bounce-y" />
                                <figure className="image-1 overlay-anim wow fadeInUp"><img alt="img " src="/images/resource/about-4.jpg" title="Vixoz" /></figure>
                                <figure className="image-2 overlay-anim wow fadeInRight"><img alt="img " src="/images/resource/about-5.jpg" title="Vixoz" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AboutThree;