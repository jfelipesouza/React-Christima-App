import React,{useContext} from 'react';
import {ThemeProvider} from 'styled-components';
import { Context } from '../../services/context';
import GlobalStyle from '../../styles/global';
import dark from '../../styles/theme/dark';
import light from '../../styles/theme/light';
import App from '../home';


const Routes: React.FC = () => {
  const {isDark} = useContext(Context);

  
  return(

    <ThemeProvider theme={isDark?dark:light} >
      <GlobalStyle/>
      <App/>
    </ThemeProvider>
  );
}

export default Routes;