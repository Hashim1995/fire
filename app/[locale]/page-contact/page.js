import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ContactInner from "../components/sections/ContactInner";
import MapOne from "../components/sections/MapOne";
import bg from '../../../public/images/blog-bg.jpg'
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations()

  return (
    <>
      <PageTitle data={() => {
        return (
          <ul className="page-breadcrumb">
            <li><Link href="/">{t("homePage")}</Link></li>

            <li>{t("contact")}</li>
          </ul>
        )
      }} bg={bg} title={t("contact")} />
      <ContactInner />
      <MapOne />
    </>
  );
}
