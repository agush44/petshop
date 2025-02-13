import Hero from "../components/Hero/Hero.jsx";
import CategoriesCards from "../components/CategoriesCards/CategoriesCards.jsx";
import BrandsCarousel from "../components/BrandsCarousel/BrandsCarousel.jsx";
import ProductSections from "../components/Products/ProductSections/ProductSections.jsx";
import Cart from "../components/Cart/Cart.jsx";

const Home = () => {
  return (
    <main className="main-content">
      <Hero />
      <CategoriesCards />
      <BrandsCarousel />
      <ProductSections />
      <Cart />
    </main>
  );
};

export default Home;
