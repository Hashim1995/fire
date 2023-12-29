import PageTitle from "../components/sections/PageTitle";
import AboutOne from "../components/sections/AboutOne";
import CountryOne from "../components/sections/CountryOne";
import VisaOne from "../components/sections/VisaOne";
import bg from '../../../public/images/blog-bg.jpg'



export default function Home() {

  return (
    <>
      <PageTitle bg={bg} pageName="About Us" />
      <AboutOne />
      <CountryOne />
      {/* <VisaOne /> */}
    </>
  );
}
