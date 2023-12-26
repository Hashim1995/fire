import React from "react";
import CountryInner from "../components/sections/CountryInner";
import PageTitle from "../components/sections/PageTitle";
import bg from '../../../public/images/blog-bg.jpg'
import { getLocale } from "next-intl/server";
import { returnCurrentLangId } from "../../../utils/currentLang";

async function getData() {
  const t = await getLocale();
  const res = await fetch(`https://ivisaapp.azurewebsites.net/api/v1/country?Language=${returnCurrentLangId(t)}`, {
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
  return (
    <>
      <PageTitle bg={bg} title={'SERVICES'} />
      <CountryInner data={data} />
    </>
  );
}
