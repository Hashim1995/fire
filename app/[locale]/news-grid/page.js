import React from "react";
import PageTitle from "../components/sections/PageTitle";
import BlogInner from "../components/sections/BlogInner";
import { getLocale, getTranslations } from "next-intl/server";
import { returnCurrentLangId } from "../../../utils/currentLang";
import bg from '../../../public/images/blog-bg.jpg'
import Page404 from "../components/sections/Page404";
import Link from "next/link";

async function getData() {
  const t = await getLocale();
  const res = await fetch(`https://ivisaapp.azurewebsites.net/api/v1/blog?Language=${returnCurrentLangId(t)}`, {
    method: 'GET'
  })
  if (!res.ok) {
    return null
  }
  return res.json()
}

export default async function Home() {
  const res = await getData();
  const data = res?.data
  const t = await getTranslations()


  return (
    <>
      <PageTitle data={() => {
        return (
          <ul className="page-breadcrumb">
            <li><Link href="/">{t("homePage")}</Link></li>
            <li>{t("blog")}</li>
          </ul>
        )
      }} bg={bg} title={t("blog")} />
      {data ? <BlogInner data={data} /> : <Page404 />}
    </>
  );
}
