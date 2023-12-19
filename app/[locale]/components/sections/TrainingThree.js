import React from 'react';
import TrainingSliderTwo from '../slider/TrainingSliderTwo';

const TrainingThree = () => {
    return (
        <>
            <section className="training-section-three">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Training &amp; Certification</span>
                        <h2>Get the Immigration <br />Trainings you Deserve.</h2>
                    </div>
                    <div className="carousel-outer">
                        <div className="training-carousel">
                            <TrainingSliderTwo />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default TrainingThree;