import Link from "next/link";
import React from "react";

const NewsOne = () => {
  const data = [
    {
      img: "news-1.jpg",
      title: "The Human Rights and Democracy Study Visa Programms",
      comment: 2,
    },
    {
      img: "news-2.jpg",
      title: "The Human Rights and Democracy Study Visa Programms",
      comment: 10,
    },
    {
      img: "news-3.jpg",
      title: "The Human Rights and Democracy Study Visa Programms",
      comment: 5,
    },
  ];
  return (
    <>
      <section className="news-section">
        <div className="auto-container">
          <div className="row">
            {data.map((item, i) => (
              <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="200ms">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="news-details">
                        <img src={`images/resource/${item.img}`} title="Vixoz" />
                      </Link>
                    </figure>
                    <span className="date">
                      <b>26</b> Nov
                    </span>
                  </div>
                  <div className="content-box">
                    <ul className="post-info">
                      <li>
                        <i className="fa fa-user-circle" /> by Admin
                      </li>
                      <li>
                        <i className="fa fa-comments" /> 2 Comments
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="news-details">The Human Rights and Democracy Study Visa Programms</Link>
                    </h4>
                    <Link href="news-details" className="read-more">
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

export default NewsOne;
