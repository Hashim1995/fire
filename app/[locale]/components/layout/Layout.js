"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";

import PageHead from "./PageHead";
import { useTranslations } from "next-intl";

const Layout = ({ children, HeaderStyle,  }) => {
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
  return (
    <>
      <PageHead />
      <div className="page-wrapper" id="top">
        {HeaderStyle === "three" && (
          <Header3
            handleOpen={handleOpen}
            handleRemove={handleRemove}
            searchToggle={searchToggle}
            handleToggle={handleToggle}
            scroll={scroll}
          />
        )}
        {children}
        <Footer />
      </div>
      {/* <BackToTop /> */}
      <BackToTop />
    </>
  );
};

export default Layout;
