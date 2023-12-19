import React from 'react';
import CountrySliderTwo from '../slider/CountrySliderTwo';

const CountryTwo = () => {
    return (
        <>
            <section className="countries-section-two">
                <div className="auto-container">
                    <div className="bg-image" style={{ backgroundImage: 'url(./images/background/2.jpg)' }} />
                    <div className="sec-title text-center light">
                        <span className="sub-title">Countries we offer</span>
                        <h2>Countries We Support <br />for Immigration.</h2>
                    </div>
                    <div className="carousel-outer">
                        <div className="countries-carousel">
                            <CountrySliderTwo />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CountryTwo;