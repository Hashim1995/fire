import { returnCurrentLangId } from "@/utils/currentLang";
import { getToken } from "next-auth/jwt";
import { useSession } from "next-auth/react";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import React from "react";

async function getData() {
  const t = await getLocale();
  const res = await fetch(
    `https://ivisavmlinux.azurewebsites.net/api/v1/blog/latest?Language=${returnCurrentLangId(
      t
    )}`,
    {
      method: "GET",
    }
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
}

async function getContacts() {
  const t = await getLocale();
  const res = await fetch(
    `https://ivisavmlinux.azurewebsites.net/api/v1/settings/contact-details?Language=${returnCurrentLangId(
      t
    )}`,
    {
      method: "GET",
    }
  );
  if (!res.ok) {
    return null;
  }
  return res.json();
}

const Footer = async () => {
  const res = await getData();
  let data = res?.data;

  const resContact = await getContacts();
  const dataContacts = resContact?.data;

  const t = await getTranslations();

  return (
    <>
      <footer className="main-footer">
        <div className="auto-container">
          <div className="upper-box">
            <div className="logo">
              <Link href="/">
                <img alt="img " src="/images/logo-2.png" title="Vixoz" />
              </Link>
            </div>
            {/* <div className="subscribe-form">
                            <h5 className="title">Subscribe to Newsletter</h5>
                            <form method="post" action="#">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        className="email"
                                        placeholder="Email Address"
                                        required
                                    />
                                    <button type="button" className="theme-btn btn-style-one">
                                        <span className="btn-title">Subscribe</span>
                                    </button>
                                </div>
                            </form>
                        </div> */}
          </div>
        </div>
        {/*Widgets Section*/}
        <div className="widgets-section">
          <div className="auto-container">
            <div className="row">
              {/*Footer Column*/}
              <div className="footer-column col-xl-3 col-lg-4">
                <div className="footer-widget about-widget">
                  <h5 className="widget-title">{t("contact")}</h5>
                  <div className="text">{dataContacts?.address}</div>
                  <ul className="contact-info">
                    <li>
                      <i className="fa fa-envelope" />{" "}
                      <Link href={`mailto:${dataContacts?.email}`}>
                        {dataContacts?.email}
                      </Link>
                      <br />
                    </li>
                    <li>
                      <i className="fa fa-phone-square" />{" "}
                      <Link href="tel:980089850">
                        {dataContacts?.phoneNumber}
                      </Link>
                      <br />
                    </li>
                  </ul>
                </div>
              </div>
              {/*Footer Column*/}
              <div className="footer-column  col-lg-6 col-md-12 mb-0">
                <div className="footer-widget links-widget">
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <h5 className="widget-title">
                        <Link href="/page-about">{t("about")}</Link>
                      </h5>
                    </div>
                    <div className=" col-md-4 col-sm-12">
                      <h5 className="widget-title">
                        <Link href="/news-grid">{t("blog")}</Link>
                      </h5>
                    </div>
                    <div className=" col-md-4 col-sm-12">
                      <h5 className="widget-title">
                        <Link href="page-contact">{t("contact")}</Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              {/*Footer Column*/}
              <div className="footer-column  col-lg-3 col-md-6">
                <div className="footer-widget gallery-widget">
                  <h5 className="widget-title">{t("LatestNews")}</h5>
                  <div className="widget-content">
                    <div className="outer clearfix footerCustomBlogGrid">
                      {data?.map((z) => {
                        return (
                          <figure className="image">
                            <Link href={`/news-grid/${z.slug}/${z?.id}`}>
                              <img
                                alt="img "
                                src={`https://ivisavmlinux.azurewebsites.net/${z?.imageUrl}`}
                                title="Vixoz"
                              />
                            </Link>
                          </figure>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Footer Bottom*/}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="inner-container">
              <div className="copyright-text">
                © Copyright 2024 by <Link href="/">iviza.az</Link>
              </div>
              <ul className="social-icon-two">
                <li>
                  <Link href="#">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-facebook" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-pinterest" />
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
