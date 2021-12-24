import styled from "styled-components";

export const NewSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;

export const NewSectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.sizes.h1};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.titleColor};
  margin: 2.5rem 0 1.5rem 0;

  @media screen and (max-width: 500px) {
    font-size:${({theme})=>theme.resposiveSizes.h1};
  
  }
`;

export const NewProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 1.5rem;
 

  @media screen and (max-width:720px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 570px) {
    
    grid-template-columns: 1fr ;

  }

`;
