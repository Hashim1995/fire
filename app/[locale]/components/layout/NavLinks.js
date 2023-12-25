"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from 'next/navigation';

const NavLinks = ({ extraClassName }) => {

  const pathname = usePathname();
  console.log(pathname, 'xaliq');


  const t = useTranslations();
  return (
    <ul className={`navigation ${extraClassName}`}>
      <li className={['page-about', 'news-grid', 'page-contact', 'dashboard'].some(term => pathname.includes(term)) ? '' : 'current'}>
        <Link href="/">{t("homePage")}</Link>
      </li>
      <li className={pathname?.includes('page-about') ? 'current' : ''}>
        <Link href="/page-about">{t("about")}</Link>
      </li>
      <li className={pathname?.includes('news-grid') ? 'current' : ''}>
        <Link href="/news-grid">{t("blog")}</Link>
      </li>
      <li className={pathname?.includes('page-contact') ? 'current' : ''}>
        <Link href="/page-contact">{t("contact")}</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
