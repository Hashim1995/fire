"use client";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const CtaThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section
        className="call-to-action-two pull-up"
        style={{ backgroundImage: "url(./images/background/4.jpg)" }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-8">
              <div className="title-box">
                <h2 className="title">
                  We Counselling Students <br />
                  to Get Study Visa
                </h2>
                <Link
                  href="page-about"
                  className="theme-btn btn-style-one light"
                >
                  <span className="btn-title">Explore now</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="video-box">
                <div className="inner">
                  <a
                    onClick={() => setOpen(true)}
                    className="play-now-two alternate lightbox-image"
                  >
                    <i className="icon fa fa-play" />
                  </a>
                  <img alt="img "
                    src="/images/icons/icon-arrow.png"
                    title="Vixoz"
                    className="arrow"
                  />
                  <h4 className="title style-font">Play Video</h4>
                  <span className="sub-title">Watch training videos</span>
                </div>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="L61p2uyiMSo"
                  onClose={() => setOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaThree;
