import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles";
import customTheme from "./customTheme";

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
