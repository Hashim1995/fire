import React from "react";
import PageTitle from "../components/sections/PageTitle";
import BlogDetails from "../components/sections/BlogDetails";

export default function Home() {
  return (
    <>
      <PageTitle pageName="Blog Details" />
      <BlogDetails />
    </>
  );
}
