import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  margin: 3rem;
`;

export const ItemListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
  }
`;

export const ItemCard = styled.div`
  width: 200px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  div {
    h3 {
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1rem;
      color: #666;
      margin-bottom: 0.3rem;
    }
  }
`;

export const MoreButton = styled.button`
  background-color: #3a58cf;
  width: 10%;
  text-align: center;
  color: #fff;
  margin: 0 auto;
  display: block;
  border: none;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #2851a3;
  }
`;
