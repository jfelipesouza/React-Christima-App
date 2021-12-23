import React from "react";
import {
  FooterColumn,
  FooterContainer,
  FooterContainerTop,
  FooterCopyContainer,
  FooterDescrition,
  FooterLogo,
  FooterSubtitle,
} from "./styled";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContainerTop>
        <FooterColumn>
          <FooterLogo>Christimas </FooterLogo>

          <FooterDescrition>Celebre com quem ama.</FooterDescrition>
        </FooterColumn>

        <FooterColumn>
          <FooterSubtitle>Serviços</FooterSubtitle>

          <FooterDescrition>Preços</FooterDescrition>

          <FooterDescrition>Descontos</FooterDescrition>

          <FooterDescrition>Modo de Entrega</FooterDescrition>
        </FooterColumn>

        <FooterColumn>
          <FooterSubtitle>Suporte</FooterSubtitle>

          <FooterDescrition>FAQs</FooterDescrition>

          <FooterDescrition>Central de Apoio</FooterDescrition>

          <FooterDescrition>Entre em contato conosco</FooterDescrition>
        </FooterColumn>

        <FooterColumn>
          <FooterSubtitle>Ajude-nos</FooterSubtitle>

          <FooterDescrition>Seja Membro</FooterDescrition>

        </FooterColumn>
      </FooterContainerTop>

      <FooterCopyContainer>
        <FooterDescrition>	&copy;Copy-Felipe Souza 2021</FooterDescrition>
      </FooterCopyContainer>
    </FooterContainer>
  );
};

export default Footer;
