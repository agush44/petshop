import styled from "styled-components";
import { media } from "../../../styles";

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;

  ${media.xs} {
    width: 200px;
  }

  ${media.sm} {
    width: 300px;
  }

  ${media.md} {
    width: 400px;
  }

  ${media.lg} {
    width: 500px;
  }

  ${media.xl} {
    width: 600px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  background-color: #fff;

  ${media.xs} {
    font-size: 0.9rem;
    padding: 8px 12px;
  }

  ${media.md} {
    font-size: 1rem;
    padding: 10px 15px;
  }

  ${media.lg} {
    font-size: 1.1rem;
    padding: 12px 18px;
  }
`;

export const Suggestions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 5px;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  z-index: 10;

  ${media.xs} {
    max-height: 150px;
  }

  ${media.md} {
    max-height: 200px;
  }

  ${media.lg} {
    max-height: 300px;
  }
`;

export const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #f0f0f0;
  }

  ${media.xs} {
    font-size: 0.9rem;
    padding: 8px;
  }

  ${media.md} {
    font-size: 1rem;
    padding: 10px;
  }

  ${media.lg} {
    font-size: 1.1rem;
    padding: 12px;
  }
`;
