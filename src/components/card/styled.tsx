import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0.5rem;
  border-style: solid;
  border-width: 1.8px;
  border-color: #333;
  border-radius: 1rem;
  margin-bottom: 5rem;
  transform: scale(0.9);
  cursor: pointer;
  transition: transform 0.2s linear;
  background-color: ${({theme})=>theme.colors.containerBackground};


  -webkit-box-shadow: 2px 2px 13px 3px rgba(0,0,0,0.28); 
  box-shadow: 2px 2px 13px 3px rgba(0,0,0,0.28);


  &:hover{
    transform:scale(1);
  }

`;

export const CardImageContainer =styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  cursor:pointer;

`
export const CardImage = styled.img`
  width: 120px;
  position:absolute;
  flex: 1;
  top: 0rem;

  transition: all 0.4s linear;

  &:hover{
    top:-1rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: ${({theme})=>theme.sizes.h3};
  font-weight: ${({theme})=>theme.fontWeight.semiBold};
  color:${({theme})=>theme.colors.titleColor};
  margin-bottom: 1rem;
`;

export const CardDescrition = styled.p`
  font-size: ${({theme})=>theme.sizes.small};
  font-weight: ${({theme})=>theme.fontWeight.semiBold};
  color:${({theme})=>theme.colors.textColor};
  text-align: center;

`;
