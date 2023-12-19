import React from "react";
import PageTitle from "../components/sections/PageTitle";
import BlogInner from "../components/sections/BlogInner";

export default function Home() {
  return (
    <>
      <PageTitle pageName="News Grid" />
      <BlogInner />
    </>
  );
}
