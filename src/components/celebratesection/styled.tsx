import styled from 'styled-components';

export const CelebrateContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width:760px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50vw;
  padding: 0 3rem ;
  
  @media screen and (max-width:760px) {
    flex-direction: column;
    width: 100%;
    margin: 2rem 0;
    padding: 0 2rem;
  }

  @media screen and (max-width:400px) {
    padding: 0 1.5rem;
  }
  

`;

export const CelebrateTitle = styled.h1`
  font-size: ${({theme})=>theme.sizes.h1};
  color: ${({theme})=>theme.colors.titleColor};
  text-align: center;
  margin-bottom: 0.5rem;

  

`;

export const CelebrateSubTitle = styled.p`
  font-size: ${({theme})=>theme.sizes.normal};
  color: ${({theme})=>theme.colors.textColor};
  text-align: center;
  margin-bottom: 2rem;
  font-weight: ${({theme})=>theme.fontWeight.semiBold};

  
`;

export const RigthContainer = styled.div`
  width: 50vw;
  background-color: ${({theme})=>theme.colors.red};
  border-top-left-radius: 15rem;
  border-bottom-left-radius: 15rem;

  -webkit-box-shadow: 2px 2px 13px 3px rgba(0,0,0,0.28); 
  box-shadow: 2px 2px 13px 3px rgba(0,0,0,0.28);
  
  @media screen and (max-width:760px) {
    display: flex;
    width: 100vw;
    justify-content:center; 
    margin:2rem 0;
  }

`;

export const Image = styled.img`
  width: 75%;

  @media screen and (max-width:760px) {
    width: 60%;
  }

`;

export const CelebrateButton = styled.a`
  padding: 1.5rem 3rem;
  background-color: ${({theme})=>theme.colors.redAlt};
  color:#fff;
  font-size: ${({theme})=>theme.sizes.normal};
  border-radius: 5rem;
  cursor: pointer;
  text-decoration: none;
`;
