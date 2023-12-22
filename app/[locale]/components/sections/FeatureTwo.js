import Link from 'next/link';
import React from 'react';

const FeatureTwo = () => {
    return (
        <>
            <section className="features-section-two">
                <div className="auto-container">
                    <div className="outer-box">
                        <span className="icon-plane" />
                        <div className="row">
                            <div className="title-column col-lg-6">
                                <div className="inner-column">
                                    <div className="sec-title light">
                                        <span className="sub-title">Visa company</span>
                                        <h2>Services from <br />Experienced Agents.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="features-column col-lg-6">
                                <div className="inner-column">
                                    <figure className="image"><img alt="img " src="images/resource/image-1.png" title="Vixoz" /></figure>
                                    <ul className="features-list">
                                        <li>Entering &amp; Leaving From Country</li>
                                        <li>Visas</li>
                                        <li>Country Citizenship</li>
                                        <li>Settling In Country</li>
                                        <li>Help &amp; Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default FeatureTwo;