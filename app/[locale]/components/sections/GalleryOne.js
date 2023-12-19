import React from "react";
import GallerySliderOne from "../slider/GallerySliderOne";

const GalleryOne = () => {
  return (
    <>
      <section className="gallery-section pt-0">
        <div className="auto-container">
          <div className="carousel-outer">
            {/*clients carousel*/}
            <div className="gallery-carousel wow fadeInUp">
              <GallerySliderOne />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryOne;
