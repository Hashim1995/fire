import React from 'react';
import BannerSliderOne from '../slider/BannerSliderOne';

const BannerOne = () => {
    return (
        <>
            <section className="banner-section">
                <div className="banner-carousel">
                    <BannerSliderOne />
                </div>
            </section>
        </>
    );
};

export default BannerOne;