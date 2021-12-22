import React, { useContext } from "react";
import {FaRegSun,FaMoon} from 'react-icons/fa'
import { Context } from "../../services/context";
import {
  Container,
  HeaderNavbar,
  LogoContainer,
  HeaderLinks,
  LinksItem,
  Links,
  Logo,
  IconContainer
} from "./styled";

const Header: React.FC = () => {

  const {isDark,setDark} = useContext(Context);

  return (
    <Container>
      <HeaderNavbar>
        <LogoContainer>
          <Logo>Happy Christimas</Logo>
        </LogoContainer>
        <HeaderLinks>
          <LinksItem>
            <Links href="#home">Home</Links>
          </LinksItem>

          <LinksItem>
            <Links href="#celebrate">Celebre</Links>
          </LinksItem>

          <LinksItem>
            <Links href="#gifts">Presentes</Links>
          </LinksItem>

          <LinksItem>
            <Links href="#new">Novo</Links>
          </LinksItem>
        </HeaderLinks>
      
       
        <IconContainer onClick={()=>setDark(!isDark)} >
          {
            isDark
            ?<FaRegSun/>
            :<FaMoon/>
          }
          
        </IconContainer>
      </HeaderNavbar>
    </Container>
  );
};

export default Header;
