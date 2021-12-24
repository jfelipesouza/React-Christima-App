import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegSun, FaMoon } from "react-icons/fa";
import { Context } from "../../services/context";
import {
  Container,
  HeaderNavbar,
  LogoContainer,
  HeaderLinks,
  LinksItem,
  Links,
  Logo,
  IconContainer,
  HeaderMenu,
  HeaderIconsContainer,
} from "./styled";

const Header: React.FC = () => {
  const { isDark, setDark,open,setOpen } = useContext(Context);
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
            <Links href="#celebrate">Comemore</Links>
          </LinksItem>

          <LinksItem>
            <Links href="#gifts">Presentes</Links>
          </LinksItem>

          <LinksItem>
            <Links href="#new">Novo</Links>
          </LinksItem>

          <LinksItem>
            <Links href="#contact">Mande Mensagens</Links>
          </LinksItem>
        </HeaderLinks>
        
        <HeaderIconsContainer >
          <IconContainer onClick={() => setDark(!isDark)}>
            {isDark ? <FaRegSun /> : <FaMoon />}
          </IconContainer>
          
          <HeaderMenu>

            <IconContainer onClick={()=>setOpen(!open)}>
              <AiOutlineMenu/>
            </IconContainer>
            

          </HeaderMenu>

        </HeaderIconsContainer>
      </HeaderNavbar>
    </Container>
  );
};

export default Header;
