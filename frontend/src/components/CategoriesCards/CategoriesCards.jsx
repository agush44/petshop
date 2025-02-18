import { useEffect, useRef, useState } from "react";
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
  const [isInView, setIsInView] = useState(false);

  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);

  return (
    <CategoriesContainer>
      <StyledLink to="/productos/perros">
        <CategoryCard ref={cardRef} className={isInView ? "in-view" : ""}>
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
        <CategoryCard ref={cardRef} className={isInView ? "in-view" : ""}>
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
