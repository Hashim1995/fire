import React from "react";
import PageTitle from "../components/sections/PageTitle";
import CountryDetails from "../components/sections/CountryDetails";

export default function Home() {
  return (
    <>
      <PageTitle pageName="Country Details" />
      <CountryDetails />
    </>
  );
}
