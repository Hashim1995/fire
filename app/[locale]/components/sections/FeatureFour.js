import Link from 'next/link';
import React from 'react';

const FeatureFour = () => {
    return (
        <>
            <section className="features-section-four">
                <div className="anim-icons">
                    <span className="icon icon-shape-5" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        {/* Content Column */}
                        <div className="content-column col-lg-7 col-md-12 order-2">
                            <div className="inner-column wow fadeInRight">
                                <div className="sec-title light">
                                    <i className="sub-title">Countries we offer</i>
                                    <h2>Vizox Provides Services that Our Client Requires.</h2>
                                    <div className="text">Lorem ipsum dolor sit amet, conse ctetur adipisicing elit sed do eiusm od tempor ut labore. Many desktop publishing packages and wpage editors now use Lorem Ipsum as their defamodel text.</div>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><img alt="img " src="images/resource/feature.jpg" title="Vixoz" /></figure>
                                    <i className="icon flaticon-passport-16" />
                                </div>
                            </div>
                        </div>
                        {/* Features Column */}
                        <div className="features-column col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInLeft">
                                <div className="bg-image" style={{ backgroundImage: 'url(./images/resource/image-8.jpg)' }} />
                                <div className="row">
                                    {/* Feature Block Five  */}
                                    <div className="feature-block-five">
                                        <div className="inner-box">
                                            <i className="icon flaticon-approved" />
                                            <h5 className="title">Faster Processing</h5>
                                            <div className="text">Lorem ipsum is simply free dolor sit amet.</div>
                                        </div>
                                    </div>
                                    {/* Feature Block Five */}
                                    <div className="feature-block-five">
                                        <div className="inner-box">
                                            <i className="icon flaticon-discount" />
                                            <h5 className="title">Cost-Effective</h5>
                                            <div className="text">Lorem ipsum is simply free dolor sit amet.</div>
                                        </div>
                                    </div>
                                    {/* Feature Block Five */}
                                    <div className="feature-block-five">
                                        <div className="inner-box">
                                            <i className="icon flaticon-help" />
                                            <h5 className="title">Visa Assistance</h5>
                                            <div className="text">Lorem ipsum is simply free dolor sit amet</div>
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

export default FeatureFour;