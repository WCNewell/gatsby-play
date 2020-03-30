import React from 'react';
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

import NavBar from './navbar'

const App = ({ children }) => {
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavBar />
        <div>
          <h1>Hello. This is burger menu tutorial</h1>
          
        </div>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </>
    </ThemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
}

export default App
