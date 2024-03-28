import Image from "next/image";
import Link from "next/link";
import React from "react";

const CountryGrid = ({ data }) => {
  return (
    <>
      <section className="country-grid-section">
        <div className="container">
          <div className="row">
            {data?.map((item, i) => (
              <div className="country-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link
                        href={`/page-country/${item?.id}`}
                        className="lightbox-image"
                      >
                        <img
                          alt="img "
                          src={`https://visa-server.azurewebsites.net/${item?.coverUrl}`}
                          title="Vixoz"
                        />
                      </Link>
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="flag">
                      <img
                        alt="img"
                        style={{
                          width: "53px",
                          height: "53px",
                        }}
                        src={`https://visa-server.azurewebsites.net/${item?.flagUrl}`}
                        title="Vixoz"
                      />
                    </div>
                    <h5 className="title">
                      <Link href={`/page-country/${item?.id}`}>
                        {item?.title}
                      </Link>
                    </h5>
                    <div className="text">{item?.description}</div>
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
