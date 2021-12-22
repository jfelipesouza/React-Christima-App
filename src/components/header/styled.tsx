import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  position: fixed;
  top:0;
  z-index: 999;
  
  /* Gerando a sombra */
  -webkit-box-shadow: 5px 0px 15px -3px rgba(0,0,0,0.47); 
  box-shadow: 5px 0px 15px -3px rgba(0,0,0,0.47);
`;

export const HeaderNavbar = styled.nav`
  width: 100%;
  padding: 1rem 5rem;
  background-color: ${({theme})=>theme.colors.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 0.5px;
  border-bottom-color: black;
  border-bottom-style: solid;
`

export const LogoContainer = styled.div``;

export const Logo = styled.h2`
  color:${({theme})=>theme.colors.titleColor};
  font-size: ${({theme})=>theme.sizes.h2};
`;

export const HeaderLinks = styled.ul`
  display: flex;
`;

export const LinksItem = styled.li`
  margin-left: 2rem;
`
export const Links = styled.a`
  text-decoration: none;
  color:${({theme})=>theme.colors.titleColor};
  font-size:${({theme})=>theme.sizes.normal};

  &:hover{
    color:${({theme})=>theme.colors.red};
  }

`;

export const IconContainer = styled.div`
  font-size: ${({theme})=>theme.sizes.h3};
  color: ${({theme})=>theme.colors.titleColor};
  cursor: pointer;
`;