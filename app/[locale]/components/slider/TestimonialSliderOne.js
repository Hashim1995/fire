import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TestimonialSliderOne = () => {
  const data = [
    {
      img: "testimonial-1.jpg",
      title: "Jame sickres",
      desig: "Founder",
    },
    {
      img: "testimonial-2.jpg",
      title: "Aleesha brown",
      desig: "Co Founder",
    },
    {
      img: "testimonial-3.jpg",
      title: "Mike Hardon",
      desig: "Market Manager",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev-style-3",
          nextEl: ".swiper-button-next-style-3",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          575: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 2,
          },
          1199: {
            slidesPerView: 3,
          },
          1350: {
            slidesPerView: 3,
          },
        }}
        className=""
      >
        {data.map((item, i) => (
          <SwiperSlide className="testimonial-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img alt="img " src={`/images/resource/${item.img}`} title="Vixoz" />
                </figure>
                <span className="icon icon-quote" />
              </div>
              <div className="content-box">
                <div className="text">This is due to their best service, pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute irure lupsum istect simply free reprehenderit.</div>
                <div className="info-box">
                  <h5 className="name">Aleesha Brown</h5>
                  <span className="designation">Customers</span>
                </div>
                <div className="rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSliderOne;
