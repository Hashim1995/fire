import React from 'react';
import Accordion from '../elements/Accordion';

const FaqTwo = () => {
    return (
        <>
            <section className="faqs-section style-two">
                <div className="auto-container">
                    <div className="row">
                        {/* FAQ Column */}
                        <div className="faq-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className="sub-title">Our faqs</span>
                                    <h2>Question &amp; Answers.</h2>
                                    <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit placerat neque.</div>
                                </div>
                                <Accordion />
                            </div>
                        </div>
                        {/* Form Column */}
                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <div className="form-bg" style={{ backgroundImage: 'url(./images/background/3.jpg)' }} />
                            <div className="inner-column">
                                <div className="sec-title light">
                                    <span className="sub-title">Contact us</span>
                                    <h2>Send Message.</h2>
                                </div>
                                {/* Contact Form */}
                                <div className="contact-form wow fadeInLeft">
                                    {/*Contact Form*/}
                                    <form method="post" action="get" id="contact-form">
                                        <div className="row">
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="text" name="full_name" placeholder="Your Name" required />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input type="text" name="Email" placeholder="Email Address" required />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <input type="text" name="Phone" placeholder="Your Phone" required />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <textarea name="message" placeholder="Write a Message" required={""} />
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <button className="theme-btn btn-style-two" type="submit" name="submit-form"><span className="btn-title">Send a message</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/*End Contact Form */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default FaqTwo;