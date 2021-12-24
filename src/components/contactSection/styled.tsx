import styled from "styled-components";



export const ContactContainer = styled.section`
  width: 100vw;
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:780px) {
    margin: 4rem 0 ;
  }
  
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

  @media screen and (max-width:400px) {
    padding: 1rem 1rem;
  }
  

  @media screen and (max-width:780px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 570px) {
    width: 90%;
    grid-template-columns: 1fr ;

  }
`;

export const LeftContainer= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media screen and (max-width:780px) {
    width: 100%; 
    margin-top: 2rem;
  }

`;

export const ContactTitle = styled.h2`
  color: ${({theme})=>theme.colors.titleColor};
  font-size: ${({theme})=>theme.sizes.h2};
  margin-bottom: 1.5rem;
  user-select:none;

  @media screen and (max-width:780px) {
    text-align:center; 
  }

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

  @media screen and (max-width:400px) {
    max-width: 100%;
    min-width: 100%;
    
  }
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
  width: 60%;
  
  @media screen and (max-width:400px) {
    width: 100%; 
  }
  
`;


export const ContactImage = styled.img`
  width: 100%;
  height: auto;
  
  @media screen and (max-width:780px) {
    width: 100%; 
  }
  
`;