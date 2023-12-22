"use client";
import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const CountrySliderOne = () => {
  const data = [
    {
      thumb_img: "country-1.jpg",
      country_img: "flag-1.jpg",
      title: "Australia",
      subTitle: "Logistics",
    },
    {
      thumb_img: "country-2.jpg",
      country_img: "flag-2.jpg",
      title: "Germany",
      subTitle: "Logistics",
    },
    {
      thumb_img: "country-3.jpg",
      country_img: "flag-3.jpg",
      title: "Brazil",
      subTitle: "Logistics",
    },
    {
      thumb_img: "country-4.jpg",
      country_img: "flag-4.jpg",
      title: "Russia",
      subTitle: "Logistics",
    },
    {
      thumb_img: "country-5.jpg",
      country_img: "flag-5.jpg",
      title: "United Kingdom",
      price: 49.0,
      lesson: 8,
      students: 16,
    },
    {
      thumb_img: "country-1.jpg",
      country_img: "flag-1.jpg",
      title: "Australia",
      subTitle: "Logistics",
    },
    {
      thumb_img: "country-2.jpg",
      country_img: "flag-2.jpg",
      title: "Germany",
      subTitle: "Logistics",
    },
    {
      thumb_img: "country-3.jpg",
      country_img: "flag-3.jpg",
      title: "Brazil",
      subTitle: "Logistics",
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
          <SwiperSlide className="country-block">
            <div className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <Link href="page-country-details" className="lightbox-image">
                    <img alt="img "
                      src={`images/resource/${item.thumb_img}`}
                      title="Vixoz"
                    />{" "}
                  </Link>
                </figure>
              </div>
              <div className="content-box">
                <div className="flag">
                  <img alt="img "
                    src={`images/resource/${item.country_img}`}
                    title="Vixoz"
                  />{" "}
                </div>
                <h5 className="title">
                  <Link href="page-country-details">{item.title}</Link>
                </h5>
                <div className="text">
                  Fusce pretium sem ism the eget mattis.
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CountrySliderOne;
