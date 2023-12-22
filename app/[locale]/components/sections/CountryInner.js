import Link from "next/link";
import React from "react";

const CountryGrid = () => {
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
      <section className="country-grid-section">
        <div className="container">
          <div className="row">
            {data.map((item, i) => (
              <div className="country-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="page-country-details" className="lightbox-image">
                        <img alt="img " src={`images/resource/${item.thumb_img}`} title="Vixoz" />                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="flag">
                      <img alt="img " src={`images/resource/${item.country_img}`} title="Vixoz" />                    </div>
                    <h5 className="title">
                      <Link href="page-country-details">{item.title}</Link>
                    </h5>
                    <div className="text">Fusce pretium sem ism the eget mattis.</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryGrid;
