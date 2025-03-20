import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CategoriesContainer } from "./CategoriesCards.styles.js";
import perroImage from "../../assets/dog.webp";
import gatoImage from "../../assets/cat.webp";
import CategoryCard from "./CategoryCard.jsx";

const CategoriesCards = () => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null); // Aquí es donde se gestiona la referencia
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Activar cuando el card entre en vista
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentCardRef = cardRef.current;
    if (currentCardRef) {
      observer.observe(currentCardRef); // Inicia la observación
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef); // Desactiva la observación cuando se desmonta
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
        image={perroImage}
        title="Productos para Perros"
        description="Encuentra los mejores productos para tu mejor amigo."
        onClick={() => handleCardClick("Perros")}
      />
      <CategoryCard
        ref={cardRef} // El ref se pasa también aquí
        className={isInView ? "in-view" : ""}
        image={gatoImage}
        title="Productos para Gatos"
        description="Todo lo que tu michi necesita, en un solo lugar."
        onClick={() => handleCardClick("Gatos")}
      />
    </CategoriesContainer>
  );
};

export default CategoriesCards;
