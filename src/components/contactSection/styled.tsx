import styled from "styled-components";



export const ContactContainer = styled.section`
  width: 100vw;
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  background-color: ${({theme})=>theme.colors.containerBackground};
  -webkit-box-shadow: 2px 2px 13px 3px rgba(0,0,0,0.28); 
  box-shadow: 2px 2px 13px 3px rgba(0,0,0,0.28);
  border-radius: 2rem;
  padding: 1rem 3rem;
`;

export const LeftContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

`;

export const ContactTitle = styled.h2`
  color: ${({theme})=>theme.colors.titleColor};
  font-size: ${({theme})=>theme.sizes.h2};
  margin-bottom: 1.5rem;
  user-select:none;
`;
export const ContactMessage = styled.textarea`
  min-height: 10rem;
  max-height: 10rem;
  max-width: 80%;
  min-width: 80%;
  border-radius: 1rem;
  padding: 1.5rem;
  font-size: ${({theme})=>theme.sizes.normal} ;
  color: ${({theme})=>theme.colors.titleColor};
  background-color: ${({theme})=>theme.colors.background};
  text-transform: initial;
`;

export const ContactButton = styled.div`
  margin-top: 1.5rem;
  background-color: ${({theme})=>theme.colors.buttonColor};
  font-size: ${({theme})=>theme.sizes.h3};
  color:#fff;
  width: 80%;
  border-radius: 3rem;
  padding: 1rem 0;
  text-align: center;
  cursor: pointer;
  user-select: none;

  transition: all 0.2s linear;


  &:hover{
    background-color: ${({theme})=>theme.colors.redAlt};
  }
`

export const RigthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;


export const ContactImage = styled.img`
  width: 100%;
  height: auto;
`;