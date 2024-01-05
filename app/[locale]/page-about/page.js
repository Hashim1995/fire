import PageTitle from "../components/sections/PageTitle";
import AboutOne from "../components/sections/AboutOne";
import CountryOne from "../components/sections/CountryOne";
import VisaOne from "../components/sections/VisaOne";
import bg from '../../../public/images/blog-bg.jpg'
import { getTranslations } from "next-intl/server";
import Link from "next/link";



export default async function Home() {
  const t = await getTranslations()

  return (
    <>
      <PageTitle data={() => {
        return (
          <ul className="page-breadcrumb">
            <li><Link href="/">{t("homePage")}</Link></li>
            <li>{t("about")}</li>
          </ul>
        )
      }} bg={bg} title={t("about")} />
      <AboutOne />
      <CountryOne />
      {/* <VisaOne /> */}
    </>
  );
}
