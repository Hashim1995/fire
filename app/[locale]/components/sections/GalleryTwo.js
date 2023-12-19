import React from "react";
import GallerySliderTwo from "../slider/GallerySliderTwo";

const GalleryTwo = () => {
  return (
    <>
      <section className="gallery-section-two p-0">
        <div className="carousel-outer">
          {/*clients carousel*/}
          <div className="gallery-carousel-two  wow fadeInUp">
            <GallerySliderTwo />
          </div>
        </div>
        <div className="call-to-action">
          <div className="auto-container">
            <div className="inner-container">
              <h5 className="title">Are you Looking for Visa Applications Just Call us!</h5>
              <a href="tel:+928800683000" className="info-btn">
                <i className="fa fa-phone" /> +92 (8800) 6830 00
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryTwo;
