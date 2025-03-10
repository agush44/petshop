import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
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

  /* Extra small devices (phones, less than 576px) */
  @media (max-width: 575.98px) {
  }

  /* Small devices (larger phones, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
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
    padding: 1.2rem;
  }
`;

export const Logo = styled.img`
  width: 5.5rem;
  margin-left: 1rem;

  /* Extra small devices (phones, less than 576px) */
  @media (max-width: 575.98px) {
    width: 3.8rem;
    margin-left: 0.5rem;
  }

  /* Small devices (larger phones, 576px and up) */
  @media (min-width: 576px) and (max-width: 767.98px) {
    width: 3.8rem;
    margin-left: 0.5rem;
  }

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
  background-color: transparent;
  border: none;
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
`;
