"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { returnCurrentLangId } from "../../../../utils/currentLang";
import { truncate } from "../../../../utils/truncate";


SwiperCore.use([Autoplay, Navigation]);


const CountrySliderOne = () => {
  const [data, setData] = useState(null);
  const router = useParams()

  async function getData() {
    const res = await fetch(`https://ivisaapp.azurewebsites.net/api/v1/country?Language=${returnCurrentLangId(router.locale)}`, {
      method: 'GET',
      cache: 'no-store'
    })
    const data = await res.json()
    if (data?.succeeded) {
      setData(data?.data)
    }
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        loop={false}
        centeredSlides
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
        {data?.map((item, i) => (
          <SwiperSlide key={i} className="country-block">
            <div style={{
              minHeight: '395px'
            }} className="inner-box">
              <div className="image-box">
                <figure className="image">
                  <img alt="img " src={`https://ivisaapp.azurewebsites.net/${item?.coverUrl}`} title="Vixoz" />
                </figure>
              </div>
              <div className="content-box">
                <div className="flag">
                  <img alt="img " style={{
                    width: '53px',
                    height: '53px',

                  }} src={`https://ivisaapp.azurewebsites.net/${item?.flagUrl}`} title="Vixoz" />



                </div>
                <h5 className="title">
                  {item?.title}
                </h5>
                <div className="text">
                  <div style={{ minHeight: '80px' }} className="text">{truncate(item.description, 100, 80)}</div>
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
