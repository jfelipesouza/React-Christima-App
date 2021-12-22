import styled from "styled-components";


export const GiftSectionContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;
export const GiftSectionTitle = styled.h1`
  font-size:${({theme})=>theme.sizes.big};
  color:${({theme})=>theme.colors.titleColor};
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
export const GiftWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 50%;
  grid-gap: 2rem;
`
