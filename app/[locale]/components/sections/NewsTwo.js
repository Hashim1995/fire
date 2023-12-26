import Link from "next/link";
import React from "react";

const NewsTwo = () => {
  const data = [
    {
      thumb_img: "news-1.jpg",
      title: "Get Easily Abroad Study Visa Approval Now",
      comment: 2,
    },
    {
      thumb_img: "news-2.jpg",
      title: "Visa Application Fee increases from July 2022",
      comment: 10,
    },
    {
      thumb_img: "news-3.jpg",
      title: "Employment Insurance for Foreign Nationals",
      comment: 5,
    },
  ];
  return (
    <>
      <section className="news-section-two">
        <div className="anim-icons">
          <span className="icon icon-object-1" />
          <span className="icon icon-shape-4" />
        </div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">recent news feed</span>
            <h2>
              Latest News &amp; Articles <br />
              From the Blog.
            </h2>
          </div>
          <div className="row">
            {data.map((item, i) => (
              <div className="news-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <Link href="news-details">
                        <img alt="img " src={`/images/resource/${item.thumb_img}`} title="Vixoz" />                      </Link>
                    </figure>
                    <span className="date">
                      <b>26</b> Nov
                    </span>
                  </div>
                  <div className="content-box">
                    <ul className="post-info">
                      <li>
                        <i className="fa fa-comments" /> {item.comment} Comments
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="news-details">{item.title}</Link>
                    </h4>
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

export default NewsTwo;
