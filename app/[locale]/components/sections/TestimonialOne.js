import React from 'react';
import TestimonialSliderOne from '../slider/TestimonialSliderOne';

const TestimonialOne = () => {
    return (
        <>
            <section className="testimonial-section">
                <div className="bg-image" style={{ backgroundImage: 'url(./images/background/1.jpg)' }} />
                <div className="anim-icons">
                    <span className="icon icon-wide-map" />
                </div>
                <div className="auto-container">
                    <div className="sec-title text-center light">
                        <span className="sub-title">Clients feedbacks</span>
                        <h2>What They’re Talking About.</h2>
                    </div>
                    <div className="carousel-outer">
                        <div className="testimonial-carousel">
                            <TestimonialSliderOne />
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default TestimonialOne;