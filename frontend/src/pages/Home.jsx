import Hero from "../components/Hero/Hero.jsx";
import CategoriesCards from "../components/CategoriesCards/CategoriesCards.jsx";
import BrandsCarousel from "../components/BrandsCarousel/BrandsCarousel.jsx";
import Novedades from "./Novedades.jsx";
import Shop from "./Shop.jsx";

const Home = () => {
  return (
    <main>
      <Hero />
      <CategoriesCards />
      <BrandsCarousel />
      <Novedades />
      <Shop />
    </main>
  );
};

export default Home;
