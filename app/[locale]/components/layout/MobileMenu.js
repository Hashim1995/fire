'us client'
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

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
    </>
  );
};

export default MobileMenu;
