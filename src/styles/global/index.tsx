import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;

  }

  :root{
    font-size: 16px;
  }

  html{
    scroll-behavior: smooth;
  }
  body{
    font-family: 'Poppins',sans-serif;
    font-size: ${({theme})=>theme.sizes.normal};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    background-color:  ${({theme})=>theme.colors.background};
    overflow-x: hidden;

    transition: background-color 0.4s linear;
  }

  body::-webkit-scrollbar {
    width: 5px;
  }

  body::-webkit-scrollbar-track {
    background: ${({theme})=>theme.colors.background};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({theme})=>theme.colors.redAlt};
    border-radius: 1.25rem;
    border: 1px solid ${({theme})=>theme.colors.redAlt};
  }

  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }

  h1,h2,h3,h4,h5,h6{

    transition: color 0.2s linear;
  }

  img{
    user-select: none;
  }

  h1{

    @media screen and (max-width:760px) {
      margin-top: 3rem;
      width: 100vw;
      text-align: center;
      font-size: ${({theme})=>theme.resposiveSizes.h1};

    }

    @media screen and (max-width:424px) {   
      font-size: ${({theme})=>theme.resposiveSizes.big};
      color: grey;
    }

  }

  h2{
    @media screen and (max-width:760px){
      font-size: ${({theme})=>theme.resposiveSizes.h1};

    }

    @media screen and (max-width:424px) {   
      font-size: ${({theme})=>theme.resposiveSizes.h2};

    }
  }

  p{
      @media screen and (max-width:760px){
        font-size: ${({theme})=>theme.resposiveSizes.normal};

      }

      @media screen and (max-width:424px) {   
        font-size: ${({theme})=>theme.resposiveSizes.small};

      }
  }

`;

export default GlobalStyle;
