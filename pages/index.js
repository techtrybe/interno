import Brands from "components/Brands";
import Button from "components/Button";
import { EstimateSection } from "components/EstimateSection";
import FeatureSection from "components/feature/FeatureSection";
import Hero from "components/Hero";
import ProjectSection from "components/project/ProjectSection";
import Page from "components/shared/Page";
import Stats from "components/Stats";
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
        <ProjectSection />
      </div>
      <div className="bg-[#F4F0EC] my-10 py-4">
        <Stats />
      </div>
    </>
  );
}

export default Home;
