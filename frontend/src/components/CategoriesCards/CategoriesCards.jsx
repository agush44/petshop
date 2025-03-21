import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoriesContainer } from "./CategoriesCards.styles.js";
import perroImage from "../../assets/dog.webp";
import gatoImage from "../../assets/cat.webp";
import CategoryCard from "./CategoryCard.jsx";

const CategoriesCards = () => {
  const [visibleCards, setVisibleCards] = useState({
    first: false,
    second: false,
  });
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === firstCardRef.current) {
              setVisibleCards((prev) => ({ ...prev, first: true }));
            } else if (entry.target === secondCardRef.current) {
              setVisibleCards((prev) => ({ ...prev, second: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const firstCardNode = firstCardRef.current;
    const secondCardNode = secondCardRef.current;

    if (firstCardNode) observer.observe(firstCardNode);
    if (secondCardNode) observer.observe(secondCardNode);

    return () => {
      if (firstCardNode) observer.unobserve(firstCardNode);
      if (secondCardNode) observer.unobserve(secondCardNode);
    };
  }, []);

  const handleCardClick = (animal) => {
    navigate(`/shop?animal=${animal}`);
  };

  return (
    <CategoriesContainer>
      <CategoryCard
        ref={firstCardRef}
        className={visibleCards.first ? "in-view" : ""}
        image={perroImage}
        title="Productos para Perros"
        description="Encuentra los mejores productos para tu mejor amigo."
        onClick={() => handleCardClick("Perros")}
      />
      <CategoryCard
        ref={secondCardRef}
        className={visibleCards.second ? "in-view" : ""}
        image={gatoImage}
        title="Productos para Gatos"
        description="Todo lo que tu michi necesita, en un solo lugar."
        onClick={() => handleCardClick("Gatos")}
      />
    </CategoriesContainer>
  );
};

export default CategoriesCards;
