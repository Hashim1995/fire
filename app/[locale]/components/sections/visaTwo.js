import Link from "next/link";
import React from "react";

const ServiceTwo = () => {
  return (
    <>
      <section className="services-section-two">
        <div className="anim-icons">
          <span className="icon icon-object-3" />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">What do we offer</span>
            <h2>
              Outstanding Immigration <br />
              Visa Services.
            </h2>
          </div>
          <div className="row">
            {/* Service Block Two  */}
            <div className="service-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="page-visa-details">
                      <img alt="img " src="images/resource/service-4.jpg" title="Vixoz" />
                    </Link>
                  </figure>
                  <div className="icon-box">
                    <i className="icon fa fa-graduation-cap" />
                  </div>
                  <div className="content-box">
                    <h5 className="title">
                      <Link href="page-visa-details">Student Visa</Link>
                    </h5>
                    <div className="text">There are many lipsum of passages of available but the have in that not some.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Service Block Two  */}
            <div className="service-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="page-visa-details">
                      <img alt="img " src="images/resource/service-5.jpg" title="Vixoz" />
                    </Link>
                  </figure>
                  <div className="icon-box">
                    <i className="icon fa fa-users" />
                  </div>
                  <div className="content-box">
                    <h5 className="title">
                      <Link href="page-visa-details">Family Visa</Link>
                    </h5>
                    <div className="text">There are many lipsum of passages of available but the have in that not some.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Service Block Two  */}
            <div className="service-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="page-visa-details">
                      <img alt="img " src="images/resource/service-6.jpg" title="Vixoz" />
                    </Link>
                  </figure>
                  <div className="icon-box">
                    <i className="icon fa fa-camera" />
                  </div>
                  <div className="content-box">
                    <h5 className="title">
                      <Link href="page-visa-details">Tourist Visa</Link>
                    </h5>
                    <div className="text">There are many lipsum of passages of available but the have in that not some.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Service Block Two */}
            <div className="service-block-two col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="page-visa-details">
                      <img alt="img " src="images/resource/service-7.jpg" title="Vixoz" />
                    </Link>
                  </figure>
                  <div className="icon-box">
                    <i className="icon fa fa-home" />
                  </div>
                  <div className="content-box">
                    <h5 className="title">
                      <Link href="page-visa-details">Resident Visa</Link>
                    </h5>
                    <div className="text">There are many lipsum of passages of available but the have in that not some.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceTwo;
