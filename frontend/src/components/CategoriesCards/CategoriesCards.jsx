import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CategoryCard,
  CategoryImage,
  CategoryTitle,
  CategoriesContainer,
  CategoryContent,
  CategoryDescription,
} from "./CategoriesCards.styles.js";
import dogImage from "../../assets/dog.jpg";
import catImage from "../../assets/cat.jpg";

const CategoriesCards = () => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);
  const navigate = useNavigate();

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

  const handleCardClick = (animal) => {
    navigate(`/shop?animal=${animal}`);
  };

  return (
    <CategoriesContainer>
      <CategoryCard
        ref={cardRef}
        className={isInView ? "in-view" : ""}
        onClick={() => handleCardClick("perros")}
      >
        <CategoryImage src={dogImage} alt="Perro" />
        <CategoryContent>
          <CategoryTitle>Productos para Perros</CategoryTitle>
          <CategoryDescription>
            Encuentra los mejores productos para tu mejor amigo.
          </CategoryDescription>
        </CategoryContent>
      </CategoryCard>
      <CategoryCard
        ref={cardRef}
        className={isInView ? "in-view" : ""}
        onClick={() => handleCardClick("gatos")}
      >
        <CategoryImage src={catImage} alt="Gato" />
        <CategoryContent>
          <CategoryTitle>Productos para Gatos</CategoryTitle>
          <CategoryDescription>
            Todo lo que tu michi necesita, en un solo lugar.
          </CategoryDescription>
        </CategoryContent>
      </CategoryCard>
    </CategoriesContainer>
  );
};

export default CategoriesCards;
