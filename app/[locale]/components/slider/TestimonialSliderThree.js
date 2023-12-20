import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TestimonialSliderThree = () => {
  const data = [
    {
      thumb_img: "testimonial-1.jpg",
      title: "Jame sickres",
      text: "I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum quia.",
      desig: "Founder",
    },
    {
      thumb_img: "testimonial-2.jpg",
      title: "Aleesha brown",
      text: "I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum quia.",
      desig: "Co Founder",
    },
    {
      thumb_img: "testimonial-3.jpg",
      title: "Mike Hardon",
      text: "I was very impresed by the company service lore ipsum is simply free text used by copy typing refreshing. Neque porro est qui dolorem ipsum quia.",
      desig: "Market Manager",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={2}
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
            slidesPerView: 2,
          },
          1350: {
            slidesPerView: 2,
          },
        }}
        className=""
      >
        {data.map((item, i) => (
          <SwiperSlide className="testimonial-block-three">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img alt="img " src={`images/resource/${item.thumb_img}`} title="Vixoz" />                </figure>
              </div>
              <div className="content-box">
                <div className="text">{item.text}</div>
                <div className="info-box">
                  <h5 className="name">{item.title}</h5>
                  <span className="designation">{item.desig}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialSliderThree;
