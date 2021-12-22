import styled from 'styled-components';

export const GiftCardContainer = styled.div`
  display: flex;
  width: 200px;
  padding: 2rem 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-width: 1.8px;
  border-radius: 1rem;
  border-style: solid;
  background-color:${({theme})=>theme.colors.containerBackground};
  cursor:pointer;
  transition: all 0.4s linear;
  position: relative;

  -webkit-box-shadow: 2px 2px 13px 3px rgba(0,0,0,0.28); 
  box-shadow: 2px 2px 13px 3px rgba(0,0,0,0.28);

  &:hover{
    transform: scale(1.1);
  }

`;

export const Image = styled.img`
  width: 6rem;
  height: auto;
  margin-bottom: 0.5rem;
  transition: all 0.4s linear;
  
  &:hover{
    transform: translateY(-1rem);
    background-color: ${({theme})=>theme.colors.redAlt};
    border-radius: 6rem;
    
  }
`;

export const GiftPrice = styled.h3`
  font-size:${({theme})=>theme.sizes.h3};
  color:${({theme})=>theme.colors.titleColor};
  font-weight:${({theme})=>theme.fontWeight.semiBold};
  margin: 0.5rem 0;
`;

export const GiftCardDescrition = styled.p`
  font-size:${({theme})=>theme.sizes.normal};
  color:${({theme})=>theme.colors.textColor};
  font-weight:${({theme})=>theme.fontWeight.semiBold};

`;



export const GiftCardIcon = styled.div`
  color:red;
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  right: 0.5rem;
`;

