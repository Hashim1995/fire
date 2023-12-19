import React from 'react';

const ProcessTwo = () => {
    return (
        <>
            <section className="process-section-two pt-0">
                <div className="anim-icons full-width">
                    <span className="icon icon-cards" />
                    <span className="icon icon-object-1" />
                </div>
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Our work process</span>
                        <h2>Get your Visa Approved in <br />4 Simple Steps.</h2>
                    </div>
                    <div className="row">
                        {/* Process block Two  */}
                        <div className="process-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-interview-1" />
                                    <span className="count">01</span>
                                </div>
                                <div className="info-box">
                                    <h5 className="title">Interview</h5>
                                    <div className="text">Lorem Ipsum is simply dummy text of the new des printng and type.</div>
                                </div>
                            </div>
                        </div>
                        {/* Process block Two  */}
                        <div className="process-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-form" />
                                    <span className="count">02</span>
                                </div>
                                <div className="info-box">
                                    <h5 className="title">Fill Form</h5>
                                    <div className="text">Lorem Ipsum is simply dummy text of the new des printng and type.</div>
                                </div>
                            </div>
                        </div>
                        {/* Process block Two  */}
                        <div className="process-block-two col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-documents" />
                                    <span className="count">03</span>
                                </div>
                                <div className="info-box">
                                    <h5 className="title">Documentation</h5>
                                    <div className="text">Lorem Ipsum is simply dummy text of the new des printng and type.</div>
                                </div>
                            </div>
                        </div>
                        {/* Process block Two */}
                        {/* <div className="process-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <i className="icon flaticon-visa-3" />
                                    <span className="count">04</span>
                                </div>
                                <div className="info-box">
                                    <h5 className="title">Get Visa</h5>
                                    <div className="text">Lorem Ipsum is simply dummy text of the new des printng and type.</div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

        </>
    );
};

export default ProcessTwo;