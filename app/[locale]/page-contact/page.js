import React from "react";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/sections/PageTitle";
import ContactInner from "../components/sections/ContactInner";
import MapOne from "../components/sections/MapOne";
import bg from '../../../public/images/blog-bg.jpg'

export default function Home() {
  return (
    <>
      <PageTitle bg={bg} pageName="Contact" />
      <ContactInner />
      <MapOne />
    </>
  );
}
