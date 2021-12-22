import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './screens/routes';
import ContextProvider from './services/context';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Routes/>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

