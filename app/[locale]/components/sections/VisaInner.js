import Link from "next/link";
import React from "react";

const TrainingGrid = () => {
  const data = [
    {
      thumb_img: "service-1.jpg",
      title: "Student Visa",
      subTitle: "Fusce pretium sem ism the eget mattis. Nam hendrerit elit vel urna fermentum congue.",
    },
    {
      thumb_img: "service-2.jpg",
      title: "Take IELTS",
      subTitle: "Fusce pretium sem ism the eget mattis. Nam hendrerit elit vel urna fermentum congue.",
    },
    {
      thumb_img: "service-3.jpg",
      title: "PTE Coaching",
      subTitle: "Fusce pretium sem ism the eget mattis. Nam hendrerit elit vel urna fermentum congue.",
    },
    {
      thumb_img: "service-1.jpg",
      title: "Take IELTS",
      subTitle: "Fusce pretium sem ism the eget mattis. Nam hendrerit elit vel urna fermentum congue.",
    },
    {
      thumb_img: "service-2.jpg",
      title: "PTE Coaching",
      subTitle: "Fusce pretium sem ism the eget mattis. Nam hendrerit elit vel urna fermentum congue.",
    },
    {
      thumb_img: "service-3.jpg",
      title: "Citizenship Test",
      subTitle: "Fusce pretium sem ism the eget mattis. Nam hendrerit elit vel urna fermentum congue.",
    },
  ];
  return (
    <>
      <section className="training-grid-section">
        <div className="container">
          <div className="row">
            {data.map((item, i) => (
              <div className="service-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="page-visa-details">
                        <img src={`images/resource/${item.thumb_img}`} title="Vixoz" />
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

export default TrainingGrid;
