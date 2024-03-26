import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const TrainingSliderOne = () => {
  const data = [
    {
      thumb_img: "course-1.jpg",
      title: "Citizenship Test",
      subTitle: "The Human Rights and Democracy Study Visa Programms",
    },
    {
      thumb_img: "course-2.jpg",
      title: "Take IELTS",
      subTitle: "The Human Rights and Democracy Study Visa Programms",
    },
    {
      thumb_img: "course-3.jpg",
      title: "PTE Coaching",
      subTitle: "The Human Rights and Democracy Study Visa Programms",
    },
    {
      thumb_img: "course-4.jpg",
      title: "Take IELTS",
      subTitle: "The Human Rights and Democracy Study Visa Programms",
    },
    {
      thumb_img: "course-1.jpg",
      title: "PTE Coaching",
      subTitle: "The Human Rights and Democracy Study Visa Programms",
    },
    {
      thumb_img: "course-4.jpg",
      title: "Citizenship Test",
      subTitle: "The Human Rights and Democracy Study Visa Programms",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
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
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="training-slider1"
      >
        {data?.map((item, i) => (
          <SwiperSlide>
            <div className="training-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="page-training-details">
                      <img
                        alt="img "
                        src={`/images/resource/${item.thumb_img}`}
                        title="training-img"
                      />
                    </Link>
                  </figure>
                  <div className="info-box">
                    <h5 className="title">
                      <Link href="page-training-details">{item.title}</Link>
                    </h5>
                    <Link href="page-training-details" className="read-more">
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
                <div className="overlay-content">
                  <div className="info-box">
                    <h5 className="title">
                      <Link href="page-training-details">{item.title}</Link>
                    </h5>
                    <div className="text">{item.subTitle}</div>
                    <Link href="page-training-details" className="read-more">
                      <i className="fa fa-long-arrow-alt-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TrainingSliderOne;
