import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  width: 100%;
  height: 80vh;
  margin-top: 4.1875rem;

  @media screen and (max-width:760px) {
    flex-direction: column;
  }
`;



export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50vw;
  background-color: ${({theme})=>theme.colors.red};
  border-top-right-radius: 80rem ;
  border-bottom-right-radius: 80rem;
  -webkit-box-shadow: 2px 2px 13px 3px rgba(0,0,0,0.28); 
  box-shadow: 2px 2px 13px 3px rgba(0,0,0,0.28);
  @media screen and (max-width:760px) {
    width: 100vw;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 80%;
  justify-self: center;
  
  @media screen and (max-width:760px) {
    width: 50%;
  }
`;

export const RightContainer = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width:760px) {
    width: 100vw;
  }

`;

export const HeroSectionTitle = styled.h1`
  font-weight: ${({theme})=>theme.fontWeight.semiBold};
  font-size: ${({theme})=>theme.sizes.h1};
  color:${({theme})=>theme.colors.titleColor};
  text-align: center;
  width: 80%;

  @media screen and (max-width:760px) {
    margin-top: 3rem;
    width: 100vw;
    text-align: center;
    font-size: ${({theme})=>theme.resposiveSizes.h1};

  }
`;

export const HeroSectionDescrition = styled.p`
  font-weight: ${({theme})=>theme.fontWeight.semiBold};
  font-size: ${({theme})=>theme.sizes.normal};
  color:${({theme})=>theme.colors.textColor};
  width: 80%;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
  @media screen and (max-width:760px){
    font-size: ${({theme})=>theme.resposiveSizes.normal};

  }


`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`

export const HeroSectionSubTitle = styled.h2`
  font-weight: ${({theme})=>theme.fontWeight.semiBold};
  font-size: ${({theme})=>theme.sizes.h1};
  color:${({theme})=>theme.colors.titleColor};
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width:760px){
    font-size: ${({theme})=>theme.resposiveSizes.h1};

  }

`

export const HeroSectionWhrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1.5rem;
  padding: 0 3.125rem;
  overflow-y: hidden;
`;

export const HeroButton = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 1.25rem 3rem;
  font-size: ${({theme})=>theme.sizes.normal};
  border-radius: 3rem;
  text-transform: capitalize;
  background-color: ${({theme})=>theme.colors.redAlt};
  margin-top: 1rem;

  &:hover{
    background-color: ${({theme})=>theme.colors.red};
  }
`;
