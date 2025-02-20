import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(
    0deg,
    rgb(232, 222, 242) 20%,
    rgb(209, 208, 230) 50%,
    rgb(174, 190, 230) 100%
  );

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

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

export const HeaderBottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 5.5rem;
  margin-left: 1rem;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    width: 4.5rem;
    margin-left: 0.5rem;
  }
  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    width: 5.5rem;
    margin-left: 1rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 45%;

  margin-left: 5rem;
  border: none;
  box-shadow: -2px 13px 28px -4px rgba(0, 0, 0, 0.48);
  -webkit-box-shadow: -2px 13px 28px -4px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: -2px 13px 28px -4px rgba(0, 0, 0, 0.48);

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    height: 2.5rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    height: 20%;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    height: 20%;
  }
`;

export const SearchBar = styled.input`
  height: 100%;
  border: none;
  padding: 0.7rem;
  width: 100%;
  border: none;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  &:focus {
    outline: none;
  }

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
    font-size: 1rem;
  }
`;

export const SearchButton = styled.button`
  height: 45px;
  width: 43px;
  background-color: #3a58d0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  padding: 0.55rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    height: 2.5rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    height: 45px;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    height: 48px;
  }
`;

export const SearchIcon = styled.i`
  font-size: 20px;
  color: #f9f7f0;
`;

export const AccountCartContainer = styled.div`
  display: flex;
  justify-content: flex-end;

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

export const Button = styled.button`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent; /* Fondo transparente */
  border: none;
  padding: 0 1rem;
  cursor: pointer;

  svg {
    margin-bottom: 0.3rem;
    color: #324dba;

    /* Large devices (tablets/laptops, 768px and up) */
    @media (min-width: 768px) {
      font-size: 1.4rem;
    }

    /* Extra large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
    }

    /* Extra extra large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) {
      font-size: 1.5rem;
    }

    /* Ultra-wide screens (4K displays, 1400px and up) */
    @media (min-width: 1400px) {
      font-size: 1.5rem;
    }
  }

  span {
    color: #324dba;

    /* Large devices (tablets/laptops, 768px and up) */
    @media (min-width: 768px) {
      font-size: 0.7rem;
    }

    /* Extra large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
    }

    /* Extra extra large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) {
      font-size: 0.9rem;
    }

    /* Ultra-wide screens (4K displays, 1400px and up) */
    @media (min-width: 1400px) {
      font-size: 0.9rem;
    }
  }

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

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding-top: 0.5rem;
`;
