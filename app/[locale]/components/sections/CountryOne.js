import React from 'react';
import CountrySliderOne from '../slider/CountrySliderOne';

const CountryOne = () => {
    return (
        <>
            <section className="countries-section">
                <div className="auto-container">
                    <div className="bg-layer" />
                    <div className="sec-title text-center light">
                        <span className="sub-title">Countries we offer</span>
                        <h2>Countries We Support <br />for Immigration.</h2>
                    </div>
                    <div className="carousel-outer">
                        <div className="countries-carousel">
                            <CountrySliderOne/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CountryOne;