import React from "react";
import Link from "next/link";

const ServiceOne = () => {
  const data = [
    {
      thumb_img: "service-1.jpg",
      title: "Student Visa",
      subTitle:
        "Fusce pretium sem ism the eget mattis. Nam hendrerit elit vel urna fermentum congue.",
    },
    {
      thumb_img: "service-2.jpg",
      title: "Take IELTS",
      subTitle:
        "Fusce pretium sem ism the eget mattis. Nam hendrerit elit vel urna fermentum congue.",
    },
    {
      thumb_img: "service-3.jpg",
      title: "PTE Coaching",
      subTitle:
        "Fusce pretium sem ism the eget mattis. Nam hendrerit elit vel urna fermentum congue.",
    },
  ];
  return (
    <>
      <section className="services-section pt-0">
        <div className="anim-icons">
          <span className="icon icon-object-2" />
          <span className="icon icon-object-3" />
        </div>
        <div className="auto-container">
          <div className="sec-title">
            <div className="row">
              <div className="col-lg-7">
                <span className="sub-title">What do we offer</span>
                <h2>
                  Outstanding Immigration <br />
                  Visa Services.
                </h2>
              </div>
              <div className="col-lg-5">
                <div className="text">
                  Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem is simply free text quis bibendum.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {data?.map((item, i) => (
              <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="page-visa-details">
                        <img
                          alt="img "
                          src={`/images/resource/${item.thumb_img}`}
                          title="Vixoz"
                        />
                      </Link>
                    </figure>
                    <div className="icon-box">
                      <i className="icon fa fa-graduation-cap" />
                    </div>
                  </div>
                  <div className="content-box">
                    <h5 className="title">
                      <Link href="page-visa-details">{item.title}</Link>
                    </h5>
                    <div className="text">{item.subTitle}</div>
                    <Link href="page-visa-details" className="read-more">
                      Read More <i className="fa fa-long-arrow-alt-right" />
                    </Link>
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

export default ServiceOne;
