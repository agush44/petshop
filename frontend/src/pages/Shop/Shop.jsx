import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../../components/Products/ProductList/ProductList";
import FilterSidebar from "../../components/FilterSideBar/FilterSideBar";
import { ShopContainer, ProductListContainer } from "./Shop.styles";

const Shop = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [animalFilter, setAnimalFilter] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const animal = params.get("animal");
    if (animal) {
      setAnimalFilter(animal);
    } else {
      setAnimalFilter("");
      setCategoryFilter("");
    }
  }, [location.search]);

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleAnimalChange = (event) => {
    setAnimalFilter(event.target.value);
  };

  return (
    <ShopContainer>
      <FilterSidebar
        categoryFilter={categoryFilter}
        animalFilter={animalFilter}
        handleCategoryChange={handleCategoryChange}
        handleAnimalChange={handleAnimalChange}
      />
      <ProductListContainer>
        <ProductList
          categoryFilter={categoryFilter}
          animalFilter={animalFilter}
        />
      </ProductListContainer>
    </ShopContainer>
  );
};

export default Shop;
