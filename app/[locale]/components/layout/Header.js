'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";
import LogoDark from "../../../../public/images/logo.png";
import { BiWorld } from "react-icons/bi";
import LogoWhite from "../../../../public/images/logo-2.png";
import Az from "../../../../public/images/azerbaijan.png";
import En from "../../../../public/images/uk.png";
import Ru from "../../../../public/images/russia.png";
import { Button, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import LoginForm from "../auth/login";
import { signOut, useSession } from 'next-auth/react'

const locales = ["az", "en"];
const Header = () => {
  const [searchToggle, setSearchToggled] = useState(false);
  const [scroll, setScroll] = useState(0);
  const handleToggle = () => setSearchToggled(!searchToggle);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  const handleOpen = () => {
    document.body.classList.add("mobile-menu-visible");
  };

  const handleRemove = () => {
    document.body.classList.remove("mobile-menu-visible");
  };

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

  }, []);
  const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales });

  const [modal, setModal] = useState(false);
  const toggleLoginFormModal = () => setModal(!modal);

  const session = useSession()
  console.log(session, 'ramiz');
  return (
    <>
      <header
        className={`main-header header-style-three ${scroll ? "fixed-header" : ""
          } ${searchToggle ? "moblie-search-active" : ""}`}
      >
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <Image alt="test" src={LogoWhite} title="Vixoz" />
              </Link>
            </div>
          </div>
          {/* Nav Box */}
          <div className="nav-outer">
            <nav className="nav main-menu">
              <NavLinks extraClassName="header3" />
            </nav>
            {/* Main Menu End */}
          </div>

          <div className="outer-box">
            <UncontrolledDropdown className="lang-switcher ">
              <DropdownToggle
                aria-label="Select Language"
                className={`bg-transparent border-white Rounded `}
              >
                <BiWorld className="" size={24} />

              </DropdownToggle>
              <DropdownMenu >
                <div>
                  <Link href="/" locale="az">
                    <Image alt="test" width={24}
                      height={24} src={Az} title="Az" />
                  </Link>
                </div>
                <div>
                  <Link href="/" locale="en">
                    <Image alt="test" width={24}
                      height={24} src={En} title="En" />
                  </Link>
                </div>   <div>
                  <Link href="/" locale="ru">
                    <Image alt="test" width={24}
                      height={24} src={Ru} title="Ru" />
                  </Link>
                </div>

              </DropdownMenu>
            </UncontrolledDropdown>


            <Link href="tel:+92(8800)9806" className="info-btn">
              <i className="icon fa fa-phone" />
              <small>Call Anytime</small>
              <br /> + 88 ( 9800 ) 6802
            </Link>
            {session?.data && <Link className="text-danger" href="/dashboard">dashboard</Link>}
            {session?.data ? (
              <Button className="text-danger" onClick={() => signOut()}>
                Sign Out
              </Button>

            ) : (
              <Link className="text-danger" href="/api/auth/signin">SignIn</Link>

            )}





            {/* Mobile Nav toggler */}
            <div className="mobile-nav-toggler" onClick={handleOpen}>
              <span className="icon lnr-icon-bars" />
            </div>
          </div>
        </div>

        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" onClick={handleRemove} />
          {/* Here Menu Will Come Automatically ViLink Javascript / Same Menu as in Header */}
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link href="/">
                  <Image alt="test" src={LogoDark} title="Vixoz" />
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
            <span className="fa fa-times" />
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
                  <i className="fa fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* End Header Search */}
        {/* Sticky Header  */}
        <div
          className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""
            }`}
        >
          <div className="auto-container">
            <div className="inner-container">
              {/* Logo */}
              <div className="logo">
                <Link href="/" title>
                  <Image alt="test" src={LogoDark} title="Vixoz" />
                </Link>
              </div>
              {/* Right Col */}
              <div className="nav-outer">
                {/* Main Menu */}
                <nav className="main-menu">
                  <div className="navbar-collapse show collapse clearfix">
                    <MobileMenu />
                  </div>
                </nav>
                {/* Main Menu End */}
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler" onClick={handleOpen}>
                  <span className="icon lnr-icon-bars" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
      </header >
      {/* End Main Header */}
      {/* {modal && <LoginForm isOpen={modal} toggle={toggleLoginFormModal} />} */}
    </>
  );
};

export default Header;
