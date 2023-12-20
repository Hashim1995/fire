import React from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

SwiperCore.use([Autoplay, Navigation]);
const GallerySliderOne = () => {
  const data = [
    {
      src: "images/resource/gallery-1.jpg",
    },
    {
      src: "images/resource/gallery-2.jpg",
    },
    {
      src: "images/resource/gallery-3.jpg",
    },
    {
      src: "images/resource/gallery-4.jpg",
    },
    {
      src: "images/resource/gallery-1.jpg",
    },
    {
      src: "images/resource/gallery-2.jpg",
    },
    {
      src: "images/resource/gallery-3.jpg",
    },
    {
      src: "images/resource/gallery-4.jpg",
    },
  ];
  const [open, setOpen] = React.useState(false);

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
        className="gallery-slider1"
      >
        {data.map((item, i) => (
          <SwiperSlide>
            <div className="gallery-item">
              <a onClick={() => setOpen(true)} className="lightbox-image">
                <img alt="img " src={`${item.src}`} alt="" title="Vixoz" />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox open={open} close={() => setOpen(false)} slides={data} />
    </>
  );
};

export default GallerySliderOne;
