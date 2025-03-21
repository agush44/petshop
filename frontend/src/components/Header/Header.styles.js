import { media } from "../../styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10vh;
  padding: 1.2rem;
  background: linear-gradient(
    0deg,
    rgb(232, 222, 242) 20%,
    rgb(209, 208, 230) 50%,
    rgb(174, 190, 230) 100%
  );
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.img`
  width: 5rem;

  ${media.xs} {
    width: 3.2rem;
  }

  ${media.sm} {
    width: 3.8rem;
  }

  ${media.md} {
    width: 4.5rem;
  }

  ${media["2xl"]} {
    width: 4.5rem;
  }
`;

export const AccountCartContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  font-weight: 400;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;

  svg {
    font-size: 1.5rem;
    color: #324dba;
  }

  span {
    color: #324dba;
    font-size: 0.9rem;
    margin-left: 0.3rem;
  }

  .cart-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: red;
    color: white;
    font-size: 0.7rem;
    font-weight: bold;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
