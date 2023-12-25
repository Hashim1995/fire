import React from 'react';
import Accordion from '../elements/Accordion';

const FaqOne = () => {
    return (
        <>
            <section className="faqs-section">
                <div className="anim-icons">
                    <span className="icon icon-object-2" />
                    <span className="icon icon-object-3" />
                </div>
                <div className="auto-container">
                    <div className="row">
                        {/* FAQ Column */}
                        <div className="faq-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Our faqs</span>
                                    <h2>Frequently Asked Questions.</h2>
                                    <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit placerat neque.</div>
                                </div>
                                <Accordion />
                            </div>
                        </div>
                        {/* Form Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="banner-box-one">
                                    <i className="icon flaticon-visa-4" />
                                    <h3 className="title">Have 30+ Years Immigration Experience for Give you Visa Approval.</h3>
                                </div>
                                <div className="banner-box-two">
                                    <figure className="image"><img alt="img " src="/images/resource/image-4.jpg" title="Vixoz" /></figure>
                                    <h5 className="caption">Immigration Consultant Agency.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default FaqOne;