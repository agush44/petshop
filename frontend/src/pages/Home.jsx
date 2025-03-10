import Hero from "../components/Hero/Hero.jsx";
import CategoriesCards from "../components/CategoriesCards/CategoriesCards.jsx";
import BrandsCarousel from "../components/Brands/BrandsCarousel/BrandsCarousel.jsx";
import Promociones from "./Promociones.jsx";

const Home = () => {
  return (
    <main>
      <Hero />
      <CategoriesCards />
      <BrandsCarousel />
      <Promociones />
    </main>
  );
};

export default Home;
