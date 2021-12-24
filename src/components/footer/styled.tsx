import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100vw;
  padding: 3rem 0 0 0;
  background-color: ${({theme})=>theme.colors.redAlt};
  border-top-left-radius: 4rem;
  border-top-right-radius: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 2rem;
  flex-wrap: wrap;
 
  width: 100%; 
  
  @media screen and (max-width:680px) {
    width: 80%; 
  }
`;


export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px; 
  height: 150px;
  
  @media screen and (max-width:680px) {
    margin: 1rem 0;
  }
`;

export const FooterLogo = styled.h3`
  user-select: none;
  color:${({theme})=>theme.colors.titleColor};
  font-size: ${({theme})=>theme.sizes.h3};
  font-weight: ${({theme})=>theme.fontWeight.semiBold};
  text-align: left;
  user-select: none;
  
`;

export const FooterSubtitle = styled.h3`
  color:${({theme})=>theme.colors.titleColor};
  font-size: ${({theme})=>theme.sizes.h3};
  text-align: left;
  user-select: none;
`;

export const FooterDescrition = styled.p`
  color:${({theme})=>theme.colors.titleColor};
  text-align: left;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1rem;
`;

export const FooterCopyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
`