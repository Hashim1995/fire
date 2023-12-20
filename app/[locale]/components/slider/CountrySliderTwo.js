import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const CountrySliderTwo = () => {
  const data = [
    {
      thumb_img: "flag-1.jpg",
      title: "Australia",
      subTitle: "Fusce pretium sem is the eget mattis.",
    },
    {
      thumb_img: "flag-2.jpg",
      title: "Germany",
      subTitle: "Fusce pretium sem is the eget mattis.",
    },
    {
      thumb_img: "flag-3.jpg",
      title: "Brazil",
      subTitle: "Fusce pretium sem is the eget mattis.",
    },
    {
      thumb_img: "flag-4.jpg",
      title: "Russia",
      subTitle: "Fusce pretium sem is the eget mattis.",
    },
    {
      thumb_img: "flag-5.jpg",
      title: "United Kingdom",
      subTitle: "Fusce pretium sem is the eget mattis.",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".owl-prev-course-1",
          nextEl: ".owl-next-course-1",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            // spaceBetween: 30,
          },
          575: {
            slidesPerView: 1,
            // spaceBetween: 30,
          },
          767: {
            slidesPerView: 1,
            // spaceBetween: 30,
          },
          991: {
            slidesPerView: 2,
            // spaceBetween: 30,
          },
          1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
          },
          1350: {
            slidesPerView: 5,
            // spaceBetween: 30,
          },
        }}
        className=""
      >
        {data.map((item, i) => (
          <SwiperSlide>
            <div className="country-block-two">
              <div className="inner-box">
                <div className="flag">
                  <img alt="img " src={`images/resource/${item.thumb_img}`} title="country-img" />
                </div>
                <div className="info">
                  <h5 className="title">
                    <Link href="page-country-details">{item.title}</Link>
                  </h5>
                  <div className="text">{item.subTitle}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CountrySliderTwo;
