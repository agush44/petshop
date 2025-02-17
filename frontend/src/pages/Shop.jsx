// src/pages/Shop.jsx
import { useState } from "react";
import ProductList from "../components/Products/ProductList/ProductList";
import FilterSidebar from "../components/FilterSideBar/FilterSideBar";

const Shop = () => {
  // Estados para los filtros
  const [categoryFilter, setCategoryFilter] = useState("");
  const [animalFilter, setAnimalFilter] = useState("");

  // Función para actualizar el filtro de categoría
  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  // Función para actualizar el filtro de tipo de animal
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
