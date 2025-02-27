import {
  FilterSidebarContainer,
  Select,
  Title,
} from "./FilterSideBar.styles.js";
import PropTypes from "prop-types";
import { useEffect } from "react";

const FilterSidebar = ({
  categoryFilter,
  animalFilter,
  handleCategoryChange,
  handleAnimalChange,
}) => {
  useEffect(() => {
    console.log("AnimalFilter en Sidebar:", animalFilter);
  }, [animalFilter]);

  return (
    <FilterSidebarContainer>
      <Title>Filtrar por Categoría</Title>
      <Select onChange={handleCategoryChange} value={categoryFilter}>
        <option value="">Todas las categorías</option>
        <option value="alimentos">Alimentos</option>
        <option value="accesorios">Accesorios</option>
        <option value="piedras sanitarias">Piedras Sanitarias</option>
        <option value="golosinas y snacks">Golosinas y Snacks</option>
      </Select>

      <Title>Filtrar por Animal</Title>
      <Select onChange={handleAnimalChange} value={animalFilter}>
        <option value="">Todos los animales</option>
        <option value="perros">Perros</option>
        <option value="gatos">Gatos</option>
      </Select>
    </FilterSidebarContainer>
  );
};

FilterSidebar.propTypes = {
  categoryFilter: PropTypes.string.isRequired,
  animalFilter: PropTypes.string.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  handleAnimalChange: PropTypes.func.isRequired,
};

export default FilterSidebar;
