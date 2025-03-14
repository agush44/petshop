import styled from "styled-components";

export const BrandsListWrapper = styled.div`
  padding: 0 2rem;
  @media (min-width: 768px) {
    padding: 0 5rem;
  }
  @media (min-width: 1200px) {
    padding: 0 10rem;
  }
`;

export const BrandsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  justify-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    padding: 1rem;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 250px;
  aspect-ratio: 1 / 1;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    max-width: 200px;
    padding: 1rem;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  max-width: 150px;
  max-height: 150px;
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 120px;
    max-height: 120px;
  }
`;
