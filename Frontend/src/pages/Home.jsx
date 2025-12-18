// Home.jsx
import HeroSection from "../components/HeroSection.jsx";
import HeroCarousel from "../components/HeroCarousel.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import ProductsSection from "../components/ProductsSection.jsx";
import ShowcaseSection from "../components/ShowcaseSection.jsx";
import SuccessStoriesSection from "../components/SuccessStoriesSection.jsx";
import WhatIsLeelaSection from "../components/WhatIsLeelaSection.jsx";
import DownloadPDFSection from "../components/DownloadPDFSection.jsx";

import LeelaDocumentationSection from "../components/LeelaDocumentationSection.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroCarousel />
      <FeaturesSection />
      <ProductsSection />
      <LeelaDocumentationSection />
      <ShowcaseSection />

      <WhatIsLeelaSection />
      <SuccessStoriesSection />
      <DownloadPDFSection />
    </>
  );
}
