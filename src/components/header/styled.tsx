import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  position: fixed;
  top:0;
  z-index: 999;
  
  /* Gerando a sombra */
  -webkit-box-shadow: 5px 0px 15px -3px rgba(0, 0, 0, 0.325); 
  box-shadow: 5px 0px 15px -3px rgba(0, 0, 0, 0.325);
`;

export const HeaderNavbar = styled.nav`
  width: 100%;
  padding: 0.5rem 0;
  background-color: ${({theme})=>theme.colors.background};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom-width: 0.5px;
  border-bottom-color: black;
  border-bottom-style: solid;
`

export const LogoContainer = styled.div``;

export const Logo = styled.h2`
  color:${({theme})=>theme.colors.titleColor};
  font-size: ${({theme})=>theme.sizes.h3};
  user-select: none;
  font-weight: ${({theme})=>theme.fontWeight.semiBold};
`;

export const HeaderLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LinksItem = styled.li`
  margin-right: 3rem;
`
export const Links = styled.a`
  text-decoration: none;
  color:${({theme})=>theme.colors.titleColor};
  font-size:${({theme})=>theme.sizes.normal};
  font-weight: ${({theme})=>theme.fontWeight.semiBold};
  user-select: none;

  &:hover{
    color:${({theme})=>theme.colors.red};
  }

`;

export const IconContainer = styled.div`
  font-size: ${({theme})=>theme.sizes.h2};
  color: #fff;
  cursor: pointer;
  background-color: ${({theme})=>theme.colors.redAlt};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 5rem;
`;