import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './index.css';
import { APP } from 'components/App/App.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <APP></APP>
    </ThemeProvider>
  </React.StrictMode>
);
