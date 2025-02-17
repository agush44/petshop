import {
  CategoryCard,
  CategoryImage,
  CategoryTitle,
  CategoriesContainer,
  StyledLink,
  CategoryContent,
  CategoryDescription,
} from "./CategoriesCards.styles.js";
import dogImage from "../../assets/dog.jpg";
import catImage from "../../assets/cat.jpg";

const CategoriesCards = () => {
  return (
    <CategoriesContainer>
      <StyledLink to="/productos/perros">
        <CategoryCard>
          <CategoryImage src={dogImage} alt="Perro" />
          <CategoryContent>
            <CategoryTitle>Productos para Perros</CategoryTitle>
            <CategoryDescription>
              Encuentra los mejores productos para tu mejor amigo.
            </CategoryDescription>
          </CategoryContent>
        </CategoryCard>
      </StyledLink>
      <StyledLink to="/productos/gatos">
        <CategoryCard>
          <CategoryImage src={catImage} alt="Gato" />
          <CategoryContent>
            <CategoryTitle>Productos para Gatos</CategoryTitle>
            <CategoryDescription>
              Todo lo que tu michi necesita, en un solo lugar.
            </CategoryDescription>
          </CategoryContent>
        </CategoryCard>
      </StyledLink>
    </CategoriesContainer>
  );
};

export default CategoriesCards;
