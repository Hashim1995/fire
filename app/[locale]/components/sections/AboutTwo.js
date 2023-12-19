import React from "react";

const AboutTwo = () => {
  return (
    <>
      <section className="about-section-two">
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6 col-lg-12 col-md-12 wow fadeInRight" data-wow-delay="200ms">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Visa company</span>
                  <h2>Leading Immigration Consulting Firm</h2>
                  <div className="text">There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo massa mollis estiegittis miristum nulla sed medy fringilla simply free text vitae.</div>
                </div>
                {/*Skills*/}
                <div className="skills">
                  {/*Skill Item*/}
                  <div className="skill-item">
                    <div className="skill-header">
                      <h6 className="skill-title">Visa Process</h6>
                    </div>
                    <div className="skill-bar">
                      <div className="bar-inner">
                        <div className="bar progress-line" data-width={77} style={{ width: `77%` }}>
                          <div className="skill-percentage">
                            <div className="count-box">
                              <span className="count-text" data-speed={3000} data-stop={86}>
                                77
                              </span>
                              %
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="list-style-two">
                  <li>
                    <i className="fa fa-check-circle" /> Making this the first true generator on the Internet
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> Lorem Ipsum is not simply random text
                  </li>
                  <li>
                    <i className="fa fa-check-circle" /> If you are going to use a passage
                  </li>
                </ul>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                <div className="image-box">
                  <figure className="image overlay-anim wow fadeInUp">
                    <img src="images/resource/image-2.jpg" title="Vixoz" />
                  </figure>
                  <span className="float-text">Trusted by Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTwo;
