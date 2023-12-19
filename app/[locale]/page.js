import AboutFive from "./components/sections/AboutFive";
import BannerTwo from "./components/sections/BannerTwo";
import ClientThree from "./components/sections/ClientThree";
import CountryThree from "./components/sections/CountryThree";
import CtaThree from "./components/sections/CtaThree";
import FeatureFive from "./components/sections/FeatureFive";
import FeatureFour from "./components/sections/FeatureFour";
import FeatureThree from "./components/sections/FeatureThree";
import NewsThree from "./components/sections/NewsThree";
import ProcessTwo from "./components/sections/ProcessTwo";
import VisaTwo from "./components/sections/visaTwo";
import TestimonialThree from "./components/sections/TestimonialThree";
import TrainingThree from "./components/sections/TrainingThree";
import WhyChooseThree from "./components/sections/WhyChooseThree";

export default function Home() {
  return (
    <div>
      <BannerTwo />
      <FeatureThree />
      <AboutFive />
      <CountryThree />
      <CtaThree />
      <VisaTwo />
      <WhyChooseThree />
      <FeatureFour />
      <TrainingThree />
      <ProcessTwo />
      <TestimonialThree />
      <FeatureFive />
      <NewsThree />
      <ClientThree />
    </div>
  );
}
