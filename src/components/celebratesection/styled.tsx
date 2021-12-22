import styled from 'styled-components';

export const CelebrateContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50vw;
  padding: 0 3rem ;

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
`;

export const Image = styled.img`
  width: 75%;
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
