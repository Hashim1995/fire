import Link from "next/link";
import React from "react";

const AboutFour = () => {
  return (
    <>
      <section className="about-section-four">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6 col-lg-12 wow fadeInRight" data-wow-delay="100ms">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Visa applicatns</span>
                  <h2>Lets Plan your Trip to Dream Land.</h2>
                  <div className="text">There are many variations of passages of available, but that new majority have suffered alteration in simply free text available in the market some form, injected humour, or randomised words.</div>
                </div>
                <div className="row">
                  <div className="about-block col-lg-6 col-md-6">
                    <div className="inner">
                      <i className="icon flaticon-check-list" />
                      <h5 className="title">
                        Legal Immigration <br />
                        Success
                      </h5>
                    </div>
                  </div>
                  <div className="about-block col-lg-6 col-md-6">
                    <div className="inner">
                      <i className="icon flaticon-documents" />
                      <h5 className="title">
                        Required Documents <br />
                        Support
                      </h5>
                    </div>
                  </div>
                </div>
                <ul className="list-style-three">
                  <li>If you are going to use a passage of you need.</li>
                  <li>Lorem ipsum available, but the majority have suffered.</li>
                </ul>
                <Link href="page-visa-details" className="theme-btn btn-style-one">
                  <span className="btn-title">Explore now</span>
                </Link>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-xl-6 col-lg-12">
              <div className="inner-column wow fadeInLeft">
                <figure className="image overlay-anim wow fadeInUp">
                  <img src="images/resource/about-6.jpg" title="Vixoz" />
                </figure>
                <div className="experience bounce-y">
                  <div className="inner">
                    <i className="icon flaticon-rating" />
                    <div className="text">
                      <strong>87450</strong> happy customers
                    </div>
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

export default AboutFour;
