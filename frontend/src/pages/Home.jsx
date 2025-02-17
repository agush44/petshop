import Hero from "../components/Hero/Hero.jsx";
import CategoriesCards from "../components/CategoriesCards/CategoriesCards.jsx";
import BrandsCarousel from "../components/BrandsCarousel/BrandsCarousel.jsx";
import ProductSections from "../components/Products/ProductSections/ProductSections.jsx";
import Shop from "./Shop.jsx";

const Home = () => {
  return (
    <main>
      <Hero />
      <CategoriesCards />
      <BrandsCarousel />
      <Shop />
      <ProductSections />
    </main>
  );
};

export default Home;
