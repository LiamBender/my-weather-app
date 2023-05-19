import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    @media screen and (max-width: 728px) {
    overflow: visible;
}
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
