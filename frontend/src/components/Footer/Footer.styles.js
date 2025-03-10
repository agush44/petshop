import styled from "styled-components";

// Contenedor principal del Footer
export const FooterContainer = styled.footer`
  background-color: #3a58cf;
  color: white;
  text-align: center;
  margin-top: 3rem;
  font-family: "Baloo 2", serif;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    padding: 2rem 0;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    padding: 2rem 0;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    padding: 2rem 0;
  }
`;

// Contenedor flexible para organizar contenido
export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    font-size: 0.8rem;
    padding: 0 2rem;
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

// Sección de cada columna
export const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 1rem 0;
`;

// Título de cada sección
export const FooterTitle = styled.h4`
  text-transform: uppercase;
  letter-spacing: 1px;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

export const FooterText = styled.p`
  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    padding: 0 4rem;
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

// Estilo de los enlaces
export const FooterLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;

  transition: color 0.3s ease;

  &:hover {
    color: #f6e3ff;
  }

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    margin: 0.5rem 0;
    font-size: 0.8rem;
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
`;

// Contenedor de los iconos de redes sociales
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

// Estilos para los iconos
export const SocialIcon = styled.a`
  font-size: 1.8rem;
  color: white;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

// Texto de derechos de autor
export const Copyright = styled.p`
  opacity: 0.8;

  /* Large devices (tablets/laptops, 768px and up) */
  @media (min-width: 768px) {
  }

  /* Extra large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
  }

  /* Extra extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    margin-top: 2rem;
    font-size: 0.9rem;
  }

  /* Ultra-wide screens (4K displays, 1400px and up) */
  @media (min-width: 1400px) {
    margin-top: 2rem;
    font-size: 0.9rem;
  }
`;
