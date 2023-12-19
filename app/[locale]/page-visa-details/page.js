import React from "react";
import PageTitle from "../components/sections/PageTitle";
import VisaDetails from "../components/sections/VisaDetails";

export default function Home() {
  return (
    <>
      <PageTitle pageName="Visa Details" />
      <VisaDetails />
    </>
  );
}
