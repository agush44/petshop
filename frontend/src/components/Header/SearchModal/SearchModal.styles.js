import styled from "styled-components";
import { media } from "../../../styles";

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  font-size: 1rem;

  ${media.xs} {
    padding: 0.8rem; /* Ajustar padding para dispositivos pequeños */
    font-size: 0.9rem; /* Reducir tamaño del texto */
  }

  ${media.sm} {
    padding: 1rem;
    font-size: 1rem;
  }

  ${media.md} {
    padding: 1.2rem;
    font-size: 1.1rem;
  }
`;

export const SearchResults = styled.div`
  max-height: 300px;
  overflow-y: auto;

  ${media.xs} {
    max-height: 200px; /* Reducir altura del contenedor en móviles */
  }

  ${media.sm} {
    max-height: 250px;
  }

  ${media.md} {
    max-height: 300px;
  }
`;

export const SearchResultItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }

  ${media.xs} {
    padding: 0.8rem; /* Menor padding en dispositivos pequeños */
    font-size: 0.9rem; /* Ajustar tamaño del texto */
  }

  ${media.sm} {
    padding: 1rem;
    font-size: 1rem;
  }

  ${media.md} {
    padding: 1.2rem;
    font-size: 1.1rem;
  }
`;
