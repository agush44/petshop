import Hero from "../components/Hero/Hero.jsx";
import CategoriesCards from "../components/CategoriesCards/CategoriesCards.jsx";
import BrandsCarousel from "../components/BrandsCarousel/BrandsCarousel.jsx";
import Novedades from "./Novedades.jsx";

const Home = () => {
  return (
    <main>
      <Hero />
      <CategoriesCards />
      <BrandsCarousel />
      <Novedades />
    </main>
  );
};

export default Home;
