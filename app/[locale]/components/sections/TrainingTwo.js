import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const TrainingTwo = () => {
  const [isOpen, setOpen] = useState(false);
  const data = [
    {
      thumb_img: "course-5.jpg",
      title: "Citizenship Test",
      subTitle: "There are many variations of passages of available, but the majority have suffered freedom alteration.",
    },
    {
      thumb_img: "course-6.jpg",
      title: "Take IELTS",
      subTitle: "There are many variations of passages of available, but the majority have suffered freedom alteration.",
    },
    {
      thumb_img: "course-7.jpg",
      title: "PTE Coaching",
      subTitle: "There are many variations of passages of available, but the majority have suffered freedom alteration.",
    },
  ];
  return (
    <>
      <section className="training-section-two">
        <div className="bg-layer" />
        <div className="outer-box pull-up">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-7">
                <div className="sec-title">
                  <span className="sub-title">Training &amp; Certification</span>
                  <h2>
                    Get the Immigration <br />
                    Trainings you Deserve.
                  </h2>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="video-box">
                  <div className="inner">
                    <a onClick={() => setOpen(true)} className="play-now-two lightbox-image">
                      <i className="icon fa fa-play" />
                    </a>
                    <img alt="img " src="/images/icons/icon-arrow.png" title="Vixoz" className="arrow" />
                    <h4 className="title style-font">Play Video</h4>
                    <span className="sub-title">Watch training videos</span>
                  </div>
                </div>
                <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
              </div>
            </div>
            <div className="row">
              {/* Training Block */}
              {data.map((item, i) => (
                <div className="training-block-two col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <Link href="page-training-details">
                          <img alt="img " src={`/images/resource/${item.thumb_img}`} title="training-img" />
                        </Link>
                      </figure>
                      <div className="info-box">
                        <h5 className="title">
                          <Link href="page-training-details">{item.title}</Link>
                        </h5>
                        <div className="text">{item.subTitle}</div>
                        <Link href="page-training-details" className="read-more">
                          <i className="fa fa-long-arrow-alt-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingTwo;
