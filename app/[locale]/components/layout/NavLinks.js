"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";

const NavLinks = ({ extraClassName }) => {
  const t = useTranslations();
  return (
    <ul className={`navigation ${extraClassName}`}>


      <li className="current ">
        <Link href="/">{t("homePage")}</Link>
      </li>
      <li>
        <Link href="/page-contact">{t("services")}</Link>
      </li>
      <li>
        <Link href="/page-about">{t("about")}</Link>
      </li>
      <li>
        <Link href="/page-contact">{t("blog")}</Link>
      </li>
      <li>
        <Link href="/page-contact">{t("news")}</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
