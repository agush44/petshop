import PropTypes from "prop-types";
import { forwardRef } from "react";
import {
  CategoryCardWrapper,
  CategoryImage,
  CategoryContent,
  CategoryTitle,
  CategoryDescription,
} from "./CategoryCard.styles.js";

const CategoryCard = forwardRef(function CategoryCard(
  { image, title, description, onClick, className },
  ref
) {
  return (
    <CategoryCardWrapper ref={ref} className={className} onClick={onClick}>
      <CategoryImage src={image} alt={title} width="100%" height="auto" />
      <CategoryContent>
        <CategoryTitle>{title}</CategoryTitle>
        <CategoryDescription>{description}</CategoryDescription>
      </CategoryContent>
    </CategoryCardWrapper>
  );
});

CategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default CategoryCard;
