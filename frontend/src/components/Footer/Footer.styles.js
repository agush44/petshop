import styled from "styled-components";

// Contenedor principal del Footer
export const FooterContainer = styled.footer`
  background-color: #3a58cf;
  color: white;
  padding: 2rem 0;
  text-align: center;
  font-family: "Baloo 2", serif;
`;

// Contenedor flexible para organizar contenido
export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`;

// Sección de cada columna
export const FooterSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 1rem 0;
`;

// Título de cada sección
export const FooterTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// Estilo de los enlaces
export const FooterLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  margin: 0.5rem 0;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f6e3ff;
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
  margin-top: 2rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;
