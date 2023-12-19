import React from "react";
// import Testimonial from '../slider/Testimonial';
import TestimonialSliderTwo from "../slider/TestimonialSliderTwo";

const TestimonialTwo = () => {
  return (
    <>
      <section className="testimonial-section-two">
        <div className="bg-layer" />
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Our testimonials</span>
            <h2>
              What Our Customers are <br />
              Talking About us.
            </h2>
          </div>
          <div className="carousel-outer">
            <div className="testimonial-carousel-two">
              <TestimonialSliderTwo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialTwo;
