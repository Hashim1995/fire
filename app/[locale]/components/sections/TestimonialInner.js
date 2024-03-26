import Link from "next/link";
import React from "react";

const TestimonialInner = () => {
  const data = [
    {
      thumb_img: "testimonial-1.jpg",
      title: "Jame sickres",
      text: "To review means to look back over something for evaluation or memory. It’s always a joy to hear that the work I do has positively impacted our clients.",
      desig: "Founder",
    },
    {
      thumb_img: "testimonial-2.jpg",
      title: "Aleesha brown",
      text: "To review means to look back over something for evaluation or memory. It’s always a joy to hear that the work I do has positively impacted our clients.",
      desig: "Co Founder",
    },
  ];
  return (
    <>
      <section className="testimonial-grid-section">
        <div className="container">
          <div className="row">
            {data?.map((item, i) => (
              <div className="testimonial-block-two col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img
                        alt="img "
                        src={`/images/resource/${item.thumb_img}`}
                        title="Vixoz"
                      />{" "}
                    </figure>
                  </div>
                  <div className="content-box">
                    <div className="rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="text">{item?.text}</div>
                    <div className="info-box">
                      <h5 className="name">{item?.title}</h5>
                      <span className="designation">{item?.desig}</span>
                      <span className="icon icon-quote-2" />
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

export default TestimonialInner;
