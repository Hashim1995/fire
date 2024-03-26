import Link from "next/link";
import React from "react";

const ProcessOne = () => {
  const data = [
    {
      thumb_img: "process-1.jpg",
    },
    {
      thumb_img: "process-2.jpg",
    },
    {
      thumb_img: "process-3.jpg",
    },
  ];
  return (
    <>
      <section className="process-section pt-0">
        <span className="wide-map" />
        <div className="anim-icons">
          <span className="icon icon-object-1" />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Our work process</span>
            <h2>
              Get your Visa Approved in <br />3 Simple Steps.
            </h2>
          </div>
          <div className="row">
            {data?.map((item, i) => (
              <div className="process-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img
                        alt="img "
                        src={`/images/resource/${item.thumb_img}`}
                        title="Vixoz"
                      />{" "}
                    </figure>
                    <span className="count">01</span>
                  </div>
                  <div className="info-box">
                    <h6 className="title">
                      <Link href="page-visa-details">Complete Online Form</Link>
                    </h6>
                    <div className="text">
                      Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    </div>
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

export default ProcessOne;
