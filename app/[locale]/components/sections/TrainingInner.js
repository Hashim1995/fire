import Link from "next/link";
import React from "react";

const TrainingGrid = () => {
  const data = [
    {
      thumb_img: "course-1.jpg",
      title: "Citizenship Test",
      subTitle: "The Human Rights and Democracy Study Visa Programms",
    },
    {
      thumb_img: "course-2.jpg",
      title: "Take IELTS",
      subTitle: "The Human Rights and Democracy Study Visa Programms",
    },
    {
      thumb_img: "course-3.jpg",
      title: "PTE Coaching",
      subTitle: "The Human Rights and Democracy Study Visa Programms",
    },
    {
      thumb_img: "course-9.jpg",
      title: "Take IELTS",
      subTitle: "The Human Rights and Democracy Study Visa Programms",
    },
    {
      thumb_img: "course-10.jpg",
      title: "PTE Coaching",
      subTitle: "The Human Rights and Democracy Study Visa Programms",
    },
    {
      thumb_img: "course-11.jpg",
      title: "Citizenship Test",
      subTitle: "The Human Rights and Democracy Study Visa Programms",
    },
  ];
  return (
    <>
      <section className="training-grid-section">
        <div className="container">
          <div className="row">
            {data.map((item, i) => (
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp">
                <div className="training-block-three overflow-hidden mb-4">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="image">
                        <Link href="page-training-details">
                          <img src={`images/resource/${item.thumb_img}`} />
                        </Link>
                      </div>
                      <Link href="page-training-details" className="read-more">
                        <i className="fa fa-long-arrow-alt-right"></i>
                      </Link>
                      <div className="info-box">
                        <h4 className="title">
                          <Link href="page-training-details">{item.title}</Link>
                        </h4>
                      </div>
                    </div>
                    <div className="overlay-content">
                      <div className="info-box">
                        <h4 className="title">
                          <Link href="page-training-details">{item.title}</Link>
                        </h4>
                        <div className="text">{item.subTitle}</div>
                      </div>
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

export default TrainingGrid;
