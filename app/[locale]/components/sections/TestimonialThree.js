"use client";
import React from "react";
import TestimonialSliderThree from "../slider/TestimonialSliderThree";
// import Testimonial from '../slider/Testimonial';

const TestimonialThree = () => {
  return (
    <>
      <section className="testimonial-section-three">
        <div className="bg-layer" />
        <div className="auto-container">
          <div className="row">
            <div className="title-column col-lg-4 col-md-12">
              <div className="sec-title">
                <span className="sub-title">Our testimonials</span>
                <h2>What They are Talking About Company.</h2>
              </div>
            </div>
            <div className="testimonial-column col-lg-8 col-md-12">
              <div className="carousel-outer">
                <div className="testimonial-carousel-two">
                  <TestimonialSliderThree />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialThree;
