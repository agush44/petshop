import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 9999;
  animation: fadeIn 0.6s ease-in-out;
`;

export const CartModalContainer = styled.div`
  width: 500px;
  height: 100vh;
  background-color: white;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  animation: slideIn 0.6s ease-in-out;
  overflow-y: auto;
`;

export const CartModalContent = styled.div`
  flex: 1;
  padding-right: 10px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 13px;
  right: 40px;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.2s;
  }
`;

export const CartTitle = styled.h2`
  text-align: center;
  padding: 1rem;
  background-color: #1f3a67;
  color: #fff;
`;

export const EmptyCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CartText = styled.p`
  text-align: center;
  font-size: 16px;
  color: #666;
  padding: 2rem;
`;

export const AddProdButton = styled.button`
  padding: 0.9rem;
  background-color: #1f3a67;
  color: #fff;
  width: 80%;
  border: none;
  border-radius: 8rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: "Montserrat", sans-serif;
  fill: #fffcf5;
  letter-spacing: 2px;
  font-weight: bold;

  &:hover {
    opacity: 0.9;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2.5rem 1rem;
  width: 100%;
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
`;

export const DiscountedPrice = styled.span`
  text-decoration: line-through;
  color: gray;
  margin-right: 10px;
  font-size: 1rem;
`;

export const NewPrice = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #2a9d8f;
`;

export const ItemName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding-top: 15px;
`;

export const Img = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  margin-left: 10px;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  color: #333;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;

export const TotalContainer = styled.div`
  text-align: center;
  padding-top: 2rem;
`;

export const TotalText = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  color: #1f3a67;
  display: flex;
  justify-content: space-around;
`;

// Animaciones CSS
const fadeIn = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;

const slideIn = `
  @keyframes slideIn {
    0% { transform: translateX(100%); }
    100% { transform: translateX(0); }
  }
`;

export { fadeIn, slideIn };
