import Brands from "components/Brands";
import Button from "components/Button";
import { EstimateSection } from "components/EstimateSection";
import FeatureSection from "components/feature/FeatureSection";
import Hero from "components/Hero";
import Page from "components/shared/Page";
import TestimonialSection from "components/testimonial/TestimonialSection";

function Home() {
  return (
    <>
      <Page
        className="bg-no-repeat bg-contain bg-center bg-banner w-full h-[400px] md:h-[650px]"
        style={{
          backgroundSize: "100vw 100%",
        }}
      >
        <Hero />
      </Page>

      <div className="w-full max-w-6xl mx-auto p-4">
        <FeatureSection />
        <EstimateSection />
        <TestimonialSection />
        <Brands />
      </div>
    </>
  );
}

export default Home;
