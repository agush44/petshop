import styled from "styled-components";
import { media } from "../../styles";

// Contenedor principal del Footer
export const FooterContainer = styled.footer`
  background-color: #3a58cf;
  color: white;
  text-align: center;
  padding: 2rem 1rem; /* Más espacio en dispositivos pequeños */
  font-family: "Baloo 2", serif;

  ${media.md} {
    padding: 3rem 2rem;
  }

  ${media.lg} {
    padding: 4rem 2rem;
  }
`;

// Contenedor flexible para organizar contenido
export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Espaciado uniforme */
  align-items: flex-start; /* Mejor alineación vertical */
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem; /* Espaciado uniforme entre secciones */

  ${media.md} {
    gap: 3rem;
  }

  ${media.lg} {
    gap: 4rem;
  }
`;

// Sección de cada columna
export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px; /* Asegura que las columnas no colapsen */
  margin: 1rem 0;

  ${media.md} {
    min-width: 250px;
  }
`;

// Título de cada sección
export const FooterTitle = styled.h4`
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  font-size: 1.2rem;

  ${media.md} {
    font-size: 1.4rem;
  }

  ${media.lg} {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

export const FooterText = styled.p`
  line-height: 1.6; /* Mejora la legibilidad */
  margin: 0 auto;
  font-size: 0.9rem;

  ${media.md} {
    font-size: 1rem;
    padding: 0 2rem;
  }

  ${media.lg} {
    font-size: 1.1rem;
    padding: 0 4rem;
  }
`;

// Estilo de los enlaces
export const FooterLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  margin: 0.5rem 0;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f6e3ff;
  }

  ${media.md} {
    font-size: 1rem;
  }

  ${media.lg} {
    font-size: 1.1rem;
  }
`;

// Contenedor de los iconos de redes sociales
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;

  ${media.md} {
    gap: 2rem;
  }
`;

// Estilos para los iconos
export const SocialIcon = styled.a`
  font-size: 2rem;
  color: white;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: #f6e3ff;
  }
`;

// Texto de derechos de autor
export const Copyright = styled.p`
  opacity: 0.8;
  font-size: 0.8rem;
  margin-top: 2rem;

  ${media.md} {
    font-size: 0.9rem;
  }

  ${media.lg} {
    font-size: 1rem;
  }
`;
