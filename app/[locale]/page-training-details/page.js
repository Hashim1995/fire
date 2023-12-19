import React from "react";
import PageTitle from "../components/sections/PageTitle";
import TrainingDetails from "../components/sections/TrainingDetails";

export default function Home() {
  return (
    <>
      <PageTitle pageName="Training Details" />
      <TrainingDetails />
    </>
  );
}
