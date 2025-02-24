import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../components/Products/ProductList/ProductList";
import FilterSidebar from "../components/FilterSideBar/FilterSideBar";

const Shop = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [animalFilter, setAnimalFilter] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const animal = params.get("animal");
    if (animal) {
      setAnimalFilter(animal);
    }
  }, [location.search]);

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleAnimalChange = (event) => {
    setAnimalFilter(event.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      <FilterSidebar
        categoryFilter={categoryFilter}
        animalFilter={animalFilter}
        handleCategoryChange={handleCategoryChange}
        handleAnimalChange={handleAnimalChange}
      />
      <div style={{ flex: 1, padding: "20px" }}>
        <ProductList
          categoryFilter={categoryFilter}
          animalFilter={animalFilter}
        />
      </div>
    </div>
  );
};

export default Shop;
