import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100vw;
  padding: 3rem 0 0 0;
  background-color: ${({theme})=>theme.colors.redAlt};
  border-top-left-radius: 4rem;
  border-top-right-radius: 4rem;
  
`;

export const FooterContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;


export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px; 
  height: 150px;
`;

export const FooterLogo = styled.h3`
  user-select: none;
  color: #fff;
  font-size: ${({theme})=>theme.sizes.h3};
  font-weight: ${({theme})=>theme.fontWeight.semiBold};
  text-align: left;
  user-select: none;
  
`;

export const FooterSubtitle = styled.h3`
  color: #fff;
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