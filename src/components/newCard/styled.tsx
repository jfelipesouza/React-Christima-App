import styled from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  width: 180px;
  flex-direction: column;
  border-width: 0;
  border-radius: 1rem;
  border-style: solid;
  background-color:${({theme})=>theme.colors.containerBackground};
  position: relative;
  cursor:pointer;
  transition: all 0.4s linear;

  -webkit-box-shadow: 2px 2px 13px 3px rgba(0,0,0,0.28); 
  box-shadow: 2px 2px 13px 3px rgba(0,0,0,0.28);

  &:hover{
    transform: scale(1.1);
  }
`;

export const CardImage = styled.img`
  width: 7rem;
  height: auto;
  margin-bottom: 0.5rem;
  transition: all 0.4s linear;
 
  &:hover{
    transform: translateY(-1rem);

  }
`;

export const CardImageContainer = styled.div`
  display: flex;
  height: 10rem;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=>theme.colors.redAlt};
  border-top-left-radius: 15rem;
  border-top-right-radius: 15rem;
  border-bottom-left-radius: 150rem;
  border-bottom-right-radius: 150rem;
  padding: 1rem 0;
  
`;


export const CardTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.25rem 0;
`
export const CardPrice = styled.h3`
  font-size:${({theme})=>theme.sizes.h3};
  color:${({theme})=>theme.colors.titleColor};
  font-weight:${({theme})=>theme.fontWeight.semiBold};
  margin-bottom: 0.5rem;
`;

export const CardDescrition = styled.p`
  font-size:${({theme})=>theme.sizes.normal};
  color:${({theme})=>theme.colors.textColor};
  font-weight:${({theme})=>theme.fontWeight.semiBold};
  margin-bottom: 1rem;
`;



type IconProps = {
  isCheck:Boolean,
}

export const IconZone = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2rem; 
  background-color: ${({theme})=>theme.colors.buttonIconContainer};
  color:${({theme,isCheck})=>isCheck?theme.colors.iconColor:theme.colors.iconColorCheck};
  border-bottom-right-radius:1rem;
  font-size: 1.5rem;
  padding: 0.25rem 0.5rem;

`;
