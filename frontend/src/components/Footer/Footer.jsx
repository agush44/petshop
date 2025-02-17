import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterLink,
  SocialIcons,
  SocialIcon,
  Copyright,
} from "./Footer.styles.js";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Sección sobre el Petshop */}
        <FooterSection>
          <FooterTitle>Sobre Nosotros</FooterTitle>
          <p>Tu tienda de confianza para consentir a tus mascotas.</p>
        </FooterSection>

        {/* Sección de Enlaces */}
        <FooterSection>
          <FooterTitle>Enlaces Útiles</FooterTitle>
          <FooterLink href="#">Inicio</FooterLink>
          <FooterLink href="#">Nosotros</FooterLink>
          <FooterLink href="#">Tienda</FooterLink>
          <FooterLink href="#">Contacto</FooterLink>
        </FooterSection>

        {/* Sección de Redes Sociales */}
        <FooterSection>
          <FooterTitle>Síguenos</FooterTitle>
          <SocialIcons>
            <SocialIcon href="#" aria-label="Facebook">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <FaTwitter />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      {/* Derechos de autor */}
      <Copyright>
        © {new Date().getFullYear()} Petshop. Todos los derechos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
