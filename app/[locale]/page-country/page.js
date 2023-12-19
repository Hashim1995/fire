import React from "react";
import CountryInner from "../components/sections/CountryInner";
import PageTitle from "../components/sections/PageTitle";

export default function Home() {
  return (
    <>
      <PageTitle pageName="Country Grid" />
      <CountryInner />
    </>
  );
}
