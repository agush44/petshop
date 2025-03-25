import Hero from "../components/Hero/Hero.jsx";
import CategoriesCards from "../components/CategoriesCards/CategoriesCards.jsx";
import BrandsCarousel from "../components/Brands/BrandsCarousel/BrandsCarousel.jsx";
import Promociones from "./Promociones.jsx";
import FeatureBar from "../components/FeatureBar/FeatureBar.jsx";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeatureBar />
      <CategoriesCards />
      <BrandsCarousel />
      <Promociones />
      <Analytics />
    </main>
  );
};

export default Home;
