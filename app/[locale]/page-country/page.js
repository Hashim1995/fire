import React from "react";
import CountryInner from "../components/sections/CountryInner";
import PageTitle from "../components/sections/PageTitle";
import bg from "../../../public/images/blog-bg.jpg";
import { getLocale, getTranslations } from "next-intl/server";
import { returnCurrentLangId } from "../../../utils/currentLang";
import Link from "next/link";

async function getData() {
  try {
    const t = await getLocale();
    const res = await fetch(
      `https://ivisavmlinux.azurewebsites.net/api/v1/country?Language=${returnCurrentLangId(
        t
      )}`,
      {
        method: "GET",
      }
    );
    if (!res.ok) {
      return null;
    }
    return res?.json();
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null; // Indicate failure
  }
}

export default async function Home() {
  const res = await getData();
  const data = res?.data;
  const t = await getTranslations();

  return (
    <>
      <PageTitle
        data={() => {
          return (
            <ul className="page-breadcrumb">
              <li>
                <Link href="/">{t("homePage")}</Link>
              </li>
              <li>{t("services")}</li>
            </ul>
          );
        }}
        bg={bg}
        title={"SERVICES"}
      />
      <CountryInner data={data} />
    </>
  );
}
