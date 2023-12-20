import Link from "next/link";
import React from "react";
import Accordion from "../elements/Accordion";

const serviceListData = [
  {
    title: "Digital Marketing",
    linkurl: "page-visa-details",
  },
  {
    title: "Designing",
    linkurl: "page-visa-details",
  },
  {
    title: "Product Development",
    linkurl: "page-visa-details",
  },
  {
    title: "Data Analysis",
    linkurl: "page-visa-details",
  },
  {
    title: "Security System",
    linkurl: "page-visa-details",
  },
  {
    title: "Data Visualization",
    linkurl: "page-visa-details",
  },
];

const Serviceone = ({ alternate }) => {
  return (
    <>
      <section className="services-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="service-sidebar wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="1200m">
                    <div className="service-list">
                      <ul>
                        {serviceListData.map((eachitem, index) => (
                          <li>
                            <Link className={index === 0 ? "current" : ""} href={eachitem.linkurl}>
                              <i className="fas fa-angle-right"></i>
                              <span>{eachitem.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget banner-widget">
                  <div className="widget-content" style={{ backgroundImage: "url(images/resource/contact.jpg)" }}>
                    <div className="shape" style={{ backgroundImage: "url(/images/resource/overlay-shape.png)" }}></div>
                    <div className="content-box">
                      <div className="icon-box">
                        <i className="lnr lnr-icon-pie-chart"></i>
                      </div>
                      <h3>Be healthy & eat only fresh</h3>
                      <Link href="page-contact" className="theme-btn btn-style-two bg-light">
                        <span className="btn-title text-black"> Contact us</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="sidebar-widget service-sidebar-single mt-5">
                  <div className="service-sidebar-single-btn wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1200m">
                    <Link href="#" className="theme-btn btn-style-one d-grid">
                      <span className="btn-title">
                        <span className="fas fa-file-pdf"></span> download pdf file
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8">
              <div className="services-details__content">
                <img alt="img " src="/images/resource/service-details.jpg" title="Vizox" />
                <h2 className="mt-4">Service Overview</h2>
                <p>
                  Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur
                  turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </p>
                <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                <div className="content mt-40">
                  <div className="text">
                    <h3>Service Center</h3>
                    <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  </div>
                  <div className="feature-list">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <h6 className="title">Fast home delivery</h6>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <h6 className="title">Secure Payments</h6>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <h6 className="title">Delivering best products</h6>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <h6 className="title">Food Inspections</h6>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <h6 className="title">Generator Systems</h6>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 column">
                        <div className="single-item">
                          <div className="icon-box">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <h6 className="title">Assessments</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" mt-25">
                  <h3>Frequently Asked Question</h3>
                  <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <Accordion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Serviceone;
