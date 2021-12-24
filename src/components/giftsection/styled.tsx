import styled from "styled-components";


export const GiftSectionContainer = styled.section`
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;  

`;
export const GiftSectionTitle = styled.h1`
  font-size:${({theme})=>theme.sizes.h1};
  color:${({theme})=>theme.colors.titleColor};
  margin-top: 1rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 500px) {
    font-size:${({theme})=>theme.resposiveSizes.h1};
  
  }
`;
export const GiftWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  @media screen and (max-width:720px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 570px) {
    
    grid-template-columns: 1fr ;

  }
`
