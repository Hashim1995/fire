import Head from "next/head";
import React from "react";

const PageHead = ({ headTitle }) => {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "Vizox | Visa & Immigrations React Next JS Template"}</title>
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet" />
      </Head>
    </>
  );
};

export default PageHead;
