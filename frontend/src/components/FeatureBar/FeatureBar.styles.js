import styled, { css } from "styled-components";
import { FaMotorcycle, FaTruck, FaCreditCard } from "react-icons/fa";
import { media } from "../../styles";

export const FeatureBarContainer = styled.div`
  width: 100%;
  height: 20vh;
  background: rgb(58, 88, 207);
  background: linear-gradient(
    180deg,
    rgba(58, 88, 207, 1) 15%,
    rgba(63, 92, 208, 1) 23%,
    rgba(72, 100, 209, 1) 31%,
    rgba(77, 104, 210, 1) 40%,
    rgba(93, 117, 213, 1) 50%,
    rgba(104, 126, 215, 1) 58%,
    rgba(131, 148, 219, 1) 71%,
    rgba(165, 177, 225, 1) 83%,
    rgba(215, 219, 234, 1) 92%,
    rgba(249, 247, 240, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f9f7f0;
  padding: 2rem;
  margin-top: -1px;

  ${media.xs} {
    gap: 1rem;
    height: 12vh;
  }

  ${media.sm} {
    padding: 0 2rem;
  }

  ${media.md} {
    padding: 2rem 5%;
    gap: 1rem;
  }

  ${media.lg} {
    padding: 2rem;
    gap: 2rem;
  }

  ${media.xl} {
    padding: 2rem;
  }

  ${media["2xl"]} {
    padding: 3rem;
    height: 20vh;
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
