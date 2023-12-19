import React from "react";
import Link from "next/link";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const AnimatedSlider = () => {
  const content = [
    {
      title: "The quality role of the elementary teacher in education",
      description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis massa justo sit amet risus. Cras justo odio, dapibus ac facilisis",
      button: "Read More",
      image: "/images/main-slider/1.jpg",
      user: "Luan Gjokaj",
    },
    {
      title: "The quality role of the elementary teacher in education",
      description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis massa justo sit amet risus. Cras justo odio, dapibus ac facilisis",
      button: "Discover",
      image: "/images/main-slider/2.jpg",
      user: "Erich Behrens",
    },
    {
      title: "The quality role of the elementary teacher in education",
      description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis massa justo sit amet risus. Cras justo odio, dapibus ac facilisis",
      button: "Read More",
      image: "/images/main-slider/3.jpg",
      user: "Bruno Vizovskyy",
    },
  ];
  return (
    <>
      <Slider className="slider-wrapper" autoplay="1000" infinite="true" previous="previous" previousButton="previousButton">
        {content.map((item, index) => (
          <div key={index} className="slider-content" style={{ background: `url('${item.image}') no-repeat center center` }}>
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <Link href="page-about" className="theme-btn btn-style-one">
                <span className="btn-title">{item.button}</span>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default AnimatedSlider;
