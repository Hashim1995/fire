"use client";
import Link from "next/link";
import React, { useState } from "react";

const WhyChooseThree = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="why-choose-us-three">
        <div className="anim-icons">
          <span className="icon icon-object-1" />
        </div>
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12">
              <div className="inner-column wow fadeInRight">
                <div className="sec-title">
                  <i className="sub-title">/ Why Choose Us</i>
                  <h2>Best Immigration &amp; Visa Consultations.</h2>
                  <div className="bold-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words.
                  </div>
                  <div className="text">
                    You need to be sure there isn't anything embarrassing hidden
                    in the middle of text. All the lorem generators on the
                    Internet.
                  </div>
                </div>
                <ul className="list-style-three two-column">
                  <li>Nsectetur cing elit.</li>
                  <li>You’re going passage.</li>
                  <li>Suspe ndisse suscipit leo.</li>
                  <li>Lorem ipsum gen on tend.</li>
                </ul>
                <Link href="page-about" className="theme-btn btn-style-one">
                  <span className="btn-title">Explore now</span>
                </Link>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image-box">
                  <figure className="bg-image">
                    <img alt="img " src="/images/resource/image-6.jpg" title="Vixoz" />
                  </figure>
                  <figure className="image">
                    <img alt="img " src="/images/resource/image-5.jpg" title="Vixoz" />
                  </figure>
                  <div className="info-box">
                    <i className="icon flaticon-licensing" />
                    <span className="count">4,89000</span>
                    <div className="text">
                      We Process Clients Visa’s only in 20 Days
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-box-three">
            <div className="inner-box">
              <div className="title-column">
                <figure className="image">
                  <img alt="img " src="/images/resource/image-7.jpg" title="Vixoz" />
                </figure>
                <h3 className="title">
                  Skilled Visa’s in Global Immigration Sumit
                </h3>
              </div>
              <div className="text-column">
                <div className="text">
                  Lorem ipsum is are many variations of pass of norms and guide
                  an simply free texts affective majority.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseThree;
