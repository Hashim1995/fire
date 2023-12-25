'us client'
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileMenu = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });
  const pathname = usePathname();

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  const [isSubActive, setSubIsActive] = useState({
    status: false,
    key: "",
  });

  const handleSubClick = (key) => {
    if (isSubActive.key === key) {
      setSubIsActive({
        status: false,
      });
    } else {
      setSubIsActive({
        status: true,
        key,
      });
    }
  };

  const t = useTranslations();


  return (
    <>
      <ul className="navigation clearfix">
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
    </>
  );
};

export default MobileMenu;
