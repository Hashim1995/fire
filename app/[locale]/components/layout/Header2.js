import Link from "next/link";
import React from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import LogoDark from "../../../../public/images/logo.png";
import LogoWhite from "../../../../public/images/logo-2.png";

const Header2 = ({
  handleOpen,
  handleRemove,
  searchToggle,
  handleToggle,
  scroll,
}) => {
  return (
    <>
      <header
        className={`main-header header-style-two ${
          scroll ? "fixed-header" : ""
        } ${searchToggle ? "moblie-search-active" : ""}`}
      >
        {/* Header Top */}
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="top-left">
                {/* Info List */}
                <ul className="list-style-one">
                  <li>
                    <i className="fa fa-envelope" />{" "}
                    <Link href="mailto:needhelp@company.com">
                      needhelp@company.com
                    </Link>
                  </li>
                  <li>
                    <i className="fa fa-map-marker" /> 88 Broklyn Golden Street.
                    New York
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <ul className="social-icon-one">
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-square" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-pinterest-p" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Header Top */}
        {/* Header Lower */}
        <div className="header-lower">
          <div className="auto-container">
            {/* Main box */}
            <div className="main-box">
              <div className="logo-box">
                <div className="logo">
                  <Link href="/">
                    <Image src={LogoWhite} title="Vixoz" />
                  </Link>
                </div>
              </div>
              {/*Nav Box*/}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <NavLinks extraClassName="header2" />
                </nav>
                {/* Main Menu End*/}
              </div>
              <div className="outer-box">
                <Link
                  href="page-contact"
                  className="theme-btn btn-style-one bg-theme-color3"
                >
                  <span className="btn-title">Book a consultation</span>
                </Link>
                {/* Mobile Nav toggler */}
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Lower */}

        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleRemove} />
          {/*Here Menu Will Come Automatically ViLink Javascript / Same Menu as in Header*/}
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/">
                  <Image src={LogoDark} title="Vixoz" />
                </Link>
              </div>
              <div className="close-btn" onClick={handleRemove}>
                <i className="icon fLink fa-times" />
              </div>
            </div>
            <MobileMenu />
            <ul className="contact-list-one">
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <i className="icon lnr-icon-phone-handset" />
                  <span className="title">Call Now</span>
                  <Link href="/tel:+92880098670">+92 (8800) - 98670</Link>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-envelope1" />
                  <span className="title">Send Email</span>
                  <Link href="/mailto:help@company.com">help@company.com</Link>
                </div>
              </li>
              <li>
                {/* Contact Info Box */}
                <div className="contact-info-box">
                  <span className="icon lnr-icon-clock" />
                  <span className="title">Send Email</span>
                  Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                </div>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <Link href="#">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-facebook-f" />
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
          </nav>
        </div>
        {/* End Mobile Menu */}
        {/* Header Search */}
        <div className="search-popup">
          <span className="search-back-drop" />
          <button className="close-search" onClick={handleToggle}>
            <span className="fLink fa-times" />
          </button>
          <div className="search-inner">
            <form method="post" action="index">
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  placeholder="Search..."
                  required
                />
                <button type="submit">
                  <i className="fLink fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* End Header Search */}
        {/* Sticky Header  */}
        <div
          className={`sticky-header ${
            scroll ? "fixed-header animated slideInDown" : ""
          }`}
        >
          <div className="auto-container">
            <div className="inner-container">
              {/*Logo*/}
              <div className="logo">
                <Link href="/" title>
                  <Image src={LogoDark} title="Vixoz" />
                </Link>
              </div>
              {/*Right Col*/}
              <div className="nav-outer">
                {/* Main Menu */}
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <MobileMenu />
                  </div>
                </nav>
                {/* Main Menu End*/}
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
      </header>
      {/*End Main Header */}
    </>
  );
};

export default Header2;
