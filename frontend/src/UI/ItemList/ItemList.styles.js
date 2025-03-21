import styled from "styled-components";
import { media } from "../../styles";

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #1f1d5e;
  margin: 3rem 1rem 2rem;
  font-weight: 700;

  ${media.xs} {
    font-size: 1.5rem;
  }

  ${media.md} {
    font-size: 2.4rem;
  }

  ${media.lg} {
    font-size: 2.6rem;
    margin: 4rem 1rem 3rem;
  }
`;

export const ItemListContainer = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 0 1rem;
  margin-bottom: 2rem;

  ${media.md} {
    gap: 2.5rem;
    padding: 0 2rem;
    margin-bottom: 3rem;
  }

  ${media.lg} {
    gap: 3rem;
    padding: 0 3rem;
    margin-bottom: 3.5rem;
  }
`;

export const MoreButton = styled.button`
  background-color: #3a58cf;
  width: auto;
  max-width: 240px;
  text-align: center;
  color: #fff;
  margin: 2rem auto 3rem;
  display: block;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #2851a3;
    transform: translateY(-3px);
  }

  ${media.md} {
    font-size: 1.1rem;
  }

  ${media.lg} {
    font-size: 1.2rem;
  }
`;
