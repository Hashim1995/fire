import React from "react";
import PageTitle from "../components/sections/PageTitle";
import TeamDetails from "../components/sections/TeamDetails";

export default function Home() {
  return (
    <>
      <PageTitle pageName="Team Details" />
      <TeamDetails />
    </>
  );
}
