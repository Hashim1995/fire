import Link from "next/link";
import React from "react";

const CountryThree = () => {
  const data = [
    {
      img: "flag-aus.jpg",
      title: "Australia",
      sub: "Fusce pretium sem eget mattis",
    },
    {
      img: "flag-usa.jpg",
      title: "United States",
      sub: "Fusce pretium sem eget mattis",
    },
    {
      img: "flag-dub.jpg",
      title: "Dubai",
      sub: "Fusce pretium sem eget mattis",
    },
    {
      img: "flag-la.jpg",
      title: "Los Angeles",
      sub: "Fusce pretium sem eget mattis",
    },
    {
      img: "flag-in.jpg",
      title: "India",
      sub: "Fusce pretium sem eget mattis",
    },
    {
      img: "flag-turkey.jpg",
      title: "Turkey",
      sub: "Fusce pretium sem eget mattis",
    },
  ];
  return (
    <>
      <section className="country-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="country-details__img">
                <img alt="img " src="images/resource/country-details.jpg" title="Vixoz" />              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="country-content">
                <h3>Australia</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are gossage of Lorem
                  Ipsum, you nee there
                </p>
                <ul className="country-details-list">
                  <li>
                    <span>Country</span>
                    <span>Australia</span>
                  </li>
                  <li>
                    <span>Languages Spoken</span>
                    <span>English</span>
                  </li>
                  <li>
                    <span>Visa Requirements</span>
                    <span>Personal Documents Required</span>
                  </li>
                  <li>
                    <span>Area (km2)</span>
                    <span>84.000 km2</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="countries-section-three">
        <div className="anim-icons">
          <span className="icon icon-object-1" />
        </div>
        <div className="outer-box">
          <div className="auto-container">
            <div className="sec-title text-center">
              <span className="sub-title">Countries we offer</span>
              <h2>
                Countries We Support <br />
                for Immigration.
              </h2>
            </div>
            {/*  Countries Carousel */}
            <div className="row">
              {data.map((item, i) => (
                <div className="country-block-three col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="content">
                      <div className="flag">
                        <img alt="img " src={`images/resource/${item.img}`} title="Vixoz" />
                      </div>
                      <h5 className="title">
                        <Link href="page-country-details">{item.title}</Link>
                      </h5>
                      <div className="text">{item.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bottom-text">Top Rated By Customers &amp; Immigration Firms With 100% Success Rate.</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryThree;
