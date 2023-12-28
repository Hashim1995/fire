"use client";
import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import bg from '../../../../public/images/main-slider/1.jpg'
import { useTranslations } from "next-intl";


SwiperCore.use([Autoplay, Navigation]);
const BannerSliderTwo = () => {
  const data = [
    {
      img: "news-1.jpg",
      title: "The quality role of the elementary teacher in education",
      comment: 10,
    },
    {
      img: "news-2.jpg",
      title: "The quality role of the elementary teacher in education",
      comment: 10,
    },
    {
      img: "news-3.jpg",
      title: "The quality role of the elementary teacher in education",
      comment: 10,
    },
  ];

  const t = useTranslations();


  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={false}
        autoplay={false}
        navigation={{
          prevEl: ".swiper-button-prev-style-3",
          nextEl: ".swiper-button-next-style-3",
        }}
        // breakpoints={{
        //     320: {
        //         slidesPerView: 1,
        //         spaceBetween: 30,
        //     },
        //     575: {
        //         slidesPerView: 1,
        //         spaceBetween: 30,
        //     },
        //     767: {
        //         slidesPerView: 1,
        //         spaceBetween: 30,
        //     },
        //     991: {
        //         slidesPerView: 2,
        //         spaceBetween: 30,
        //     },
        //     1199: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     },
        //     1350: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     },
        // }}
        className="news-carousel"
      >
        <SwiperSlide>
          <div className="slide-item">
            <div
              className="bg-image"
              style={{ backgroundImage: `url(${bg?.src})` }}
            />
            <div className="auto-container">
              <div className="content-box">
                <span className="sub-title animate-1 mb-3">
                  {t("homePageSliderTopText")}
                </span>
                <div className="inner">
                  <h1 className="title animate-2">                  {t("homePageSliderMiddleText")}
                  </h1>
                  <h3 className="animate-3">
                    {t("homePageSliderBottomText")}
                  </h3>
                  {/* <div className="btn-box animate-4">
                      <Link
                        href="page-about"
                        className="theme-btn btn-style-one"
                      >
                        <span className="btn-title">Explore now</span>
                      </Link>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSliderTwo;
