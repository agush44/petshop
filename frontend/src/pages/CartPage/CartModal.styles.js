import styled from "styled-components";

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
  height: 100%;
  background-color: white;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  animation: slideIn 0.6s ease-in-out;
`;

export const CartModalContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 20px;
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
  background-color: #3a58d0;
  color: #fff;
`;

export const EmptyCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CartText = styled.p`
  text-align: center;
  font-size: 16px;
  color: #666;
  padding: 2rem;
`;

export const AddProdButton = styled.button`
  padding: 10px 20px;
  background-color: #3a58d0;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #2f47a0;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 2.5rem 1rem;
  width: 100%;
`;

export const ItemName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;
  padding-top: 15px;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  margin-left: 15px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #333;
`;

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const TotalContainer = styled.div`
  margin-top: auto;
  text-align: center;
`;

export const TotalText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
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
