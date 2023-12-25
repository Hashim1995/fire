import AboutFive from "./components/sections/AboutFive";
import BannerTwo from "./components/sections/BannerTwo";
import CountryThree from "./components/sections/CountryThree";
import ProcessTwo from "./components/sections/ProcessTwo";
import TestimonialThree from "./components/sections/TestimonialThree";
// import ClientThree from "./components/sections/ClientThree";
// import CtaThree from "./components/sections/CtaThree";
// import FeatureFive from "./components/sections/FeatureFive";
// import FeatureFour from "./components/sections/FeatureFour";
import NewsThree from "./components/sections/NewsThree";
import { getServerSession } from "next-auth";
// import VisaTwo from "./components/sections/visaTwo";
// import TestimonialThree from "./components/sections/TestimonialThree";
// import TrainingThree from "./components/sections/TrainingThree";
// import WhyChooseThree from "./components/sections/WhyChooseThree";

export default async function Home() {
  const session = getServerSession()
  return (

    <div>
      <BannerTwo />
      <AboutFive />
      <CountryThree />
      <ProcessTwo />
      <TestimonialThree />
      <NewsThree />


      {/* <CtaThree />
      <VisaTwo />
      <WhyChooseThree />
      <FeatureFour />
      <TrainingThree />
      <TestimonialThree />
      <FeatureFive />
      <NewsThree />
      <ClientThree /> */}
    </div>
  );
}
