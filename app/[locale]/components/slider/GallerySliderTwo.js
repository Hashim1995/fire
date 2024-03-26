import Link from "next/link";
import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const GallerySliderTwo = () => {
  const data = [
    {
      thumb_img: "gallery-1.jpg",
      title: "Canada Immigration Rules",
    },
    {
      thumb_img: "gallery-2.jpg",
      title: "Canada Immigration Rules",
    },
    {
      thumb_img: "gallery-3.jpg",
      title: "Canada Immigration Rules",
    },
    {
      thumb_img: "gallery-4.jpg",
      title: "Canada Immigration Rules",
    },
    {
      thumb_img: "gallery-1.jpg",
      title: "Canada Immigration Rules",
    },
    {
      thumb_img: "gallery-2.jpg",
      title: "Canada Immigration Rules",
    },
    {
      thumb_img: "gallery-3.jpg",
      title: "Canada Immigration Rules",
    },
    {
      thumb_img: "gallery-4.jpg",
      title: "Canada Immigration Rules",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
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
            slidesPerView: 4,
            // spaceBetween: 30,
          },
          1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
          },
        }}
        className="gallery-slider2"
      >
        {data?.map((item, i) => (
          <SwiperSlide>
            <div className="gallery-item-two">
              <div className="image-box">
                <figure className="image">
                  <Link href="page-visa-details" className="lightbox-image">
                    <img
                      alt="img "
                      src={`/images/resource/${item.thumb_img}`}
                      title="Vixoz"
                    />
                  </Link>
                </figure>
                <div className="caption-box">
                  <h4 className="title">
                    <Link href="page-visa-details">{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default GallerySliderTwo;
