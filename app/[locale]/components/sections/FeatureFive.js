import Link from 'next/link';
import React from 'react';

const FeatureFive = () => {
    return (
        <>
            <section className="features-section-five">
                <div className="auto-container">
                    <div className="row">
                        <div className="title-column col-xl-6 col-lg-12">
                            <div className="title-box">
                                <h4 className="title">Let’s Migrate to Your Favourite Destination</h4>
                                <figure className="image"><img src="images/resource/feature-2.jpg" title="Vixoz" /></figure>
                            </div>
                        </div>
                        <div className="features-column col-xl-6 col-lg-12">
                            <div className="inner-column">
                                <div className="text">Lorem ipsum dolor sit conseng adipiscing elit vehicula est eget felis vehicula imperdiet non lacus at quam gravida porta usce.</div>
                                <ul className="features-list">
                                    <li>Entering &amp; Leaving From Country</li>
                                    <li>Visas</li>
                                    <li>Country Citizenship</li>
                                    <li>Settling In Country</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default FeatureFive;