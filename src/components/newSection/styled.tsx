import styled from "styled-components";

export const NewSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const NewSectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.sizes.h1};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.titleColor};
  margin: 2.5rem 0 1.5rem 0;
`;

export const NewProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 1.5rem;
 
`;
