import styled, { css } from "styled-components";
import { FaMotorcycle, FaTruck, FaCreditCard } from "react-icons/fa";
import { media } from "../../../styles";

export const FeatureBarContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #3a58cf;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 36px -7px rgba(0, 0, 0, 0.15) inset;
  -webkit-box-shadow: 1px 1px 36px -7px rgba(0, 0, 0, 0.15) inset;
  -moz-box-shadow: 1px 1px 36px -7px rgba(0, 0, 0, 0.15) inset;
  color: #f9f7f0;
  padding: 0 2rem;

  ${media.xs} {
    gap: 1rem;
    height: 80px;
  }

  ${media.sm} {
    padding: 0 2rem;
  }

  ${media.md} {
    height: auto;
    padding: 2rem 5%;
    gap: 1rem;
  }

  ${media.lg} {
    height: auto;
    padding: 2rem;
    gap: 2rem;
  }

  ${media.xl} {
    height: auto;
    padding: 2rem;
  }

  ${media["2xl"]} {
    height: auto;
    padding: 3rem;
  }
`;

export const FeatureItem = styled.div`
  color: #f9f7f0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 500;
  font-size: 1.1rem;

  ${media.xs} {
    font-size: 0.6rem;
    gap: 0.5rem;
  }

  ${media.md} {
    font-size: 0.8rem;
    gap: 1rem;
  }

  ${media.lg} {
    gap: 1rem;
    font-size: 1.1rem;
  }

  ${media.xl} {
    gap: 1rem;
    font-size: 1.1rem;
  }

  ${media["2xl"]} {
    gap: 1rem;
    font-size: 1.1rem;
  }
`;

const IconBaseStyles = css`
  color: #f9f7f0;

  ${media.xs} {
    height: 1.5rem;
    width: 1.5rem;
  }

  ${media.md} {
    height: 3rem;
    width: 3rem;
  }

  ${media["2xl"]} {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const StyledFaMotorcycle = styled(FaMotorcycle)`
  ${IconBaseStyles}
`;

export const StyledFaTruck = styled(FaTruck)`
  ${IconBaseStyles}
`;

export const StyledFaCreditCard = styled(FaCreditCard)`
  ${IconBaseStyles}
`;

export const Text = styled.p`
  ${media.xs} {
    width: 58%;
  }

  ${media.md} {
    width: 50%;
  }

  ${media.lg} {
    width: 50%;
  }

  ${media.xl} {
    width: 50%;
  }

  ${media["2xl"]} {
    width: 50%;
  }
`;
